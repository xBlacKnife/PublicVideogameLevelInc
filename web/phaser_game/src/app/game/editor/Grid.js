
import { format } from "path";
import { Utils } from "phaser";
import { PassThrough } from "stream";
import { Entity } from "../entities/Entity.js";
import { Entity } from "../entities/Player.js";
import { Entity } from "../entities/Fuego.js";
import { EditorMode } from "./EditorManager.js"
import { types } from "util";
/////////////////////////////////////////////////////////////////////
////////////////////////////   Grid   /////////////////////////////
/////////////////////////////////////////////////////////////////////

/**
 * Enum con los tipos de objetos que pueden llegar
 */
const PlacingTypes = {

    TILE: "TILE",
    ENTITY: "ENTITY"
}; // PlacingTypes


/**
 * Clase EditorGrid. Es la entidad que controla la colocacion en rejilla de los elementos
 */
class EditorGrid extends Entity{  

    //#region VARIABLES

    /** 
     * datos de los tiles del nivel
     */
    _levelTilemap = null; 

    /**
     * modo de edicion
     * PUT_ENTITY, REMOVE_ENTITY, SELECT_ENTITY
     */
    _currentMode = EditorMode.PUT_ENTITY;

    /**
     * tamaño del tile en pixeles en imagen origen
     * se asumen tiles cuadrados, ancho y alto es igual
     */
    _tilePxSize = 32;
    _screenTileSize = 32;

    /**
     * _tileNumX = cantidad de tiles a lo ancho en la imagen de origen
     * _tileNumY = cantidad de tiles a lo alto la imagen de origen
     */
    _tileNumX = null;
    _tileNumY = null;

     /**
     * _screenTileX = cantidad de tiles a lo ancho en la pantalla
     * _screenTileY = cantidad de tiles a lo alto la pantalla
     */
    _screenTileX = 30;
    _screenTileY = null;


    _layer = null;
    
    _marker = null;
    _currentTile = 0;
    _currentPlacingType = PlacingTypes.TILE;
    _currentEntityConfig = null;

    //#endregion

 /////////////////////////////////////////////////////////////////////    


    /**
     * Constructora de la clase EditorGrid
     * 
     * @param {Scene} scene Escena a la que pertenece la entidad
     * @param {Dict} config Diccionario con la configuracion de la entidad
     */
    constructor(scene, config){

        super(scene, config);

        // this._tilePxSize = config.tilePxSize;
        
        // this._currentMode = ModesEnum.SELECT_ENTITY;
        
    } // constructor


/////////////////////////////////////////////////////////////////////    


    //#region METODOS

    init(){

        super.init();

        let { width, height } = this.scene.game.canvas;
        // [JSON]
        //  Creates a blank tilemap 
        this._levelTilemap = this.scene.make.tilemap({
            tileWidth: this._tilePxSize,
            tileHeight: this._tilePxSize,
            width: width,
            height: height
        });

        
        var grid = this.scene.add.grid(width/2, height/2, width, height, 
            this._screenTileSize, this._screenTileSize, 0x000000, 0)
            .setOutlineStyle(0xEE9144);
            
        //  Add a Tileset image to the map  assets/game/images/spritesheets/tilesetEditorTest.png

        this._levelTilemap.addTilesetImage('tileset', "tile_set", this._tilePxSize, this._tilePxSize);
        
        var tileset = this._levelTilemap.getTileset('tileset');
    

        //-- [DESDE JSON, pillar los datos del tilemap]  
        this._levelTilemap.createBlankDynamicLayer("editorLayer", tileset);
        
        this._layer = this._levelTilemap.getLayer("editorLayer");

        //  Create our tile selector at the top of the screen
        this.createTileSelector();

        this.scene.input.on(Phaser.Input.Events.GAMEOBJECT_POINTER_MOVE, (pointer) => {
            this.updateMarker(this);
        });
        this.scene.input.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, (pointer) => {
            this.updateMarker(this);
        });
    }


    setGridMode(mode){
        this._currentMode = mode;
    }

    /**
     * 
     * @param {Entity} entity Entidad que se va a añadir a la posición pointer. Se traduce a tile si pertenece al mapa
     * @param {pointer} pointer Coordenadas en world space que se traduciran a tiles y se utilizan como posicion de la entidad
     */
    addEntity(pGrid, entity, pointer)
    {
        let { width, height } = this.scene.game.canvas;
        entity["position"]["x"] = pointer.x /width;
        entity["position"]["y"] = pointer.y/height; 
        let e = pGrid.scene._entity_factory.create(this.scene, entity["name"], entity);
        
        // Si es distinto de null, la añade a la lista de entidades
        if (e != null) {
            e.setDisplaySize(pGrid._screenTileSize, pGrid._screenTileSize);
            e.setPosition(( pointer.x + (pGrid._screenTileSize / 2)) , 
                          ( pointer.y  + (pGrid._screenTileSize / 2)));

            this.scene._entities.push(e);
            e.init();
        }
    }

    createTileSelector() {
        
        //  Our painting marker
        this._marker = this.scene.add.graphics();
        this._marker.lineStyle(2, 0x000000, 1);
        this._marker.strokeRect(0, 0, this._levelTilemap.tileWidth, this._levelTilemap.tileHeight);
    
    }
    
    // es una mierda, lo se
    pickPick(pGrid, pointer){
        var tile = pGrid._levelTilemap.getTileAt(pointer.x, pointer.y);

        /*
            0   1   2
            3   4   5
            6   7   8
        */
        var tile_matrix = [
            pGrid._levelTilemap.getTileAt(pointer.x - 1, pointer.y - 1), 
            pGrid._levelTilemap.getTileAt(pointer.x, pointer.y - 1), 
            pGrid._levelTilemap.getTileAt(pointer.x + 1, pointer.y - 1),
            pGrid._levelTilemap.getTileAt(pointer.x - 1, pointer.y), 
            pGrid._levelTilemap.getTileAt(pointer.x, pointer.y), 
            pGrid._levelTilemap.getTileAt(pointer.x + 1, pointer.y),
            pGrid._levelTilemap.getTileAt(pointer.x - 1, pointer.y + 1), 
            pGrid._levelTilemap.getTileAt(pointer.x, pointer.y + 1), 
            pGrid._levelTilemap.getTileAt(pointer.x + 1, pointer.y + 1)
        ]

 
        /*
            -   -   -
            -   o   -
            -   -   -
        */
        if(tile_matrix[1] === null && tile_matrix[3] === null 
            && tile_matrix[5] === null && tile_matrix[7] === null)
        {
            pGrid._levelTilemap.putTileAt(10, pointer.x, pointer.y, pGrid._layer); 
        }
        /*
            -   x   -
            x   o   x
            -   x   -
        */
        else if(tile_matrix[1] != null && tile_matrix[3] != null 
            && tile_matrix[5] != null && tile_matrix[7] != null)
        {
            pGrid._levelTilemap.putTileAt(4, pointer.x, pointer.y, pGrid._layer); 
        }
        /*
            -   x   -       -   x   -       -   x   -       -   x   -       -   x   -       -   x   -      -   x   -
            -   o   -       x   o   -       x   o   -       -   o   x       -   o   x       -   o   -      x   o   x
            -   -   -       -   -   -       -   x   -       -   -   -       -   x   -       -   x   -      -   -   -
        */
        else if(tile_matrix[1] != null){
            if (tile_matrix[3] != null){
                if (tile_matrix[7] === null){
                    if(tile_matrix[5] === null)
                        pGrid._levelTilemap.putTileAt(8, pointer.x, pointer.y, pGrid._layer);  
                    else 
                        pGrid._levelTilemap.putTileAt(7, pointer.x, pointer.y, pGrid._layer);
                }
                else{
                    pGrid._levelTilemap.putTileAt(5, pointer.x, pointer.y, pGrid._layer);
                }
            }
            else if(tile_matrix[5] != null){
                if (tile_matrix[7] === null){
                    pGrid._levelTilemap.putTileAt(6, pointer.x, pointer.y, pGrid._layer);
                }
                else{
                    pGrid._levelTilemap.putTileAt(3, pointer.x, pointer.y, pGrid._layer);
                }
            }
                else if(tile_matrix[7] != null){
                    pGrid._levelTilemap.putTileAt(4, pointer.x, pointer.y, pGrid._layer);
                }
            else{
                pGrid._levelTilemap.putTileAt(7, pointer.x, pointer.y, pGrid._layer);
            }
        }
        /*
            -   -   -       -   -   -       -   -   -       -   -   -
            -   o   -       x   o   -       -   o   x       x   o   x
            -   x   -       -   x   -       -   x   -       -   x   -
        */
        else if(tile_matrix[7] != null){
            if (tile_matrix[3] != null){
                if (tile_matrix[5] === null)
                    pGrid._levelTilemap.putTileAt(2, pointer.x, pointer.y, pGrid._layer);
                else
                    pGrid._levelTilemap.putTileAt(1, pointer.x, pointer.y, pGrid._layer);
            }
            else if(tile_matrix[5] != null){
                pGrid._levelTilemap.putTileAt(0, pointer.x, pointer.y, pGrid._layer);
            }
            else{
                pGrid._levelTilemap.putTileAt(1, pointer.x, pointer.y, pGrid._layer);
            }
        }
        /*
            -   -   -       -   -   -
            x   o   -       x   o   x 
            -   -   -       -   -   -
        */
        else if(tile_matrix[3] != null){
            if (tile_matrix[5] === null){
                pGrid._levelTilemap.putTileAt(11, pointer.x, pointer.y, pGrid._layer);
            }
            else{
                pGrid._levelTilemap.putTileAt(10, pointer.x, pointer.y, pGrid._layer);
            }
        }
        /*
            -   -   -
            -   o   x
            -   -   -
        */
        else if(tile_matrix[5] != null){
            pGrid._levelTilemap.putTileAt(9, pointer.x, pointer.y, pGrid._layer);
        }
        
    }

    /**  
     * propagacion que hice en 1º de carrera, no aseguro nada, era para el buscaminas 
     */
    updateSurroundingTiles(pGrid, pointer){
        var adyacentes = [];
        var inicio, fin, maxX, maxY, minX, minY, mina;
        inicio = 0;
        fin = 1;
        
        var tile = pGrid._levelTilemap.getTileAt(pointer.x, pointer.y);
        if( tile != null)
        {
            adyacentes.push(pointer);
            
            while(inicio < fin){
                var p = adyacentes[inicio];
                pGrid.pickPick(pGrid, adyacentes[inicio])

                //Determina la dimensión del "cuadrado" que tiene que comprobar cada vez
                maxX = p.x + 1;
                maxY = p.y + 1;
                minX = p.x - 1;
                minY = p.y - 1;

                if (p.x - 1 < 0)
                    minX = 0;
                if (p.x + 1 >= 33) // esto es a pincho
                    maxX = x;
                if (p.y + 1 >= 22) // esto es a pincho
                    maxY = y;
                if (p.y - 1 < 0)
                    minY = 0;

                for (var a = minY; a <= maxY; a++)
                {
                    for (var b = minX; b <= maxX; b++)
                    {
                        //Busca la posición que va a insertar para ver si ya está en la cola
                        var w = 0;
                        while ((w < fin) && (adyacentes[w].x != b || adyacentes[w].y != a))
                            w++;
                        //Si no está, la mete en la última posición y aumenta "fin" (que apunta a la primera posición vacía)
                        if (w == fin)
                        {
                            var aux = pGrid._levelTilemap.getTileAt(b, a);
                            if(aux != null){
                                adyacentes.push({'x': b, 'y': a});
                                fin++;
                            }
                        }
                    }
                }
                inicio++;
            } // while
        }
    }

    updateMarker(pGrid) {

        var tileXY = pGrid._levelTilemap.worldToTileXY(this.scene.input.activePointer.worldX, 
                                                           this.scene.input.activePointer.worldY);

        this._marker.x = this._levelTilemap.tileToWorldX(tileXY.x);
        this._marker.y = this._levelTilemap.tileToWorldY(tileXY.y);

        if (this.scene.input.mousePointer.isDown)
        {
            // PUT ENTITIES ------- 
            if(this._currentMode == "PUT_ENTITY"){
                if(this._currentPlacingType === PlacingTypes.TILE)
                {
                    var scaleFact = (this._screenTileSize/ this._tilePxSize);
                    var tile = pGrid._levelTilemap.putTileAt(1, tileXY.x, tileXY.y, pGrid._layer);
                    tile.setCollision(true);
                    
                    // [TO DO]
                    pGrid.updateSurroundingTiles(pGrid, tileXY);
                }
                else if(this._currentPlacingType === PlacingTypes.ENTITY)
                {
                    var pos = pGrid._levelTilemap.tileToWorldXY(tileXY.x, tileXY.y);
                    this.addEntity(pGrid, pGrid._currentEntityConfig, pos);
                }

                console.log("AddTile: " + pGrid._currentTile + ", pos: " + tileXY.x + ", " + tileXY.y);
            }

            // REMOVE ENTITIES ------- 
            else if (this._currentMode == "REMOVE_ENTITY"){
                pGrid._levelTilemap.removeTileAt(tileXY.x, tileXY.y, pGrid._layer);
                console.log("RemoveTile: " + pGrid._currentTile + ", pos: " + tileXY.x + ", " + tileXY.y);


            // SELECT ENTITIES ------- 
            }else if (this._currentMode == "SELECT_ENTITY"){
                
            }
            
        }
    }

    setPlaceType(type, config){
        this._currentPlacingType = type;
        switch(type){
            case PlacingTypes.ENTITY:
                this._currentEntityConfig = config;
                break;
            case PlacingTypes.TILE:
                this._currentEntityConfig = null;
                break;

        }
        console.log("DEBUUUUUGGGGG");
    }
    //#endregion

} // class EditorGrid


export{

    EditorGrid,
    PlacingTypes
};