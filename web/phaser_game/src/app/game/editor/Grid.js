
import { format } from "path";
import { Utils } from "phaser";
import { PassThrough } from "stream";
import { Entity } from "../entities/Entity.js";
import { EditorMode } from "./EditorManager.js"
/////////////////////////////////////////////////////////////////////
////////////////////////////   Grid   /////////////////////////////
/////////////////////////////////////////////////////////////////////


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
    _currentMode = null;

    /**
     * tamaño del tile en pixeles en imagen origen
     * se asumen tiles cuadrados, ancho y alto es igual
     */
    _tilePxSize = 32;
    _screenTileSize = 64;

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
            tileWidth: this._screenTileSize,
            tileHeight: this._screenTileSize,
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
        this._layer.setSize(2);

        //  Create our tile selector at the top of the screen
        this.createTileSelector();

        this.scene.input.on(Phaser.Input.Events.GAMEOBJECT_POINTER_MOVE, (pointer) => {
            this.updateMarker(this);
        });
        this.scene.input.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, (pointer) => {
            this.updateMarker(this);
        });
    }

    update(time, delta){

        super.update(time, delta);
               
    }

    setGridMode(mode){
        this._currentMode = mode;
    }

    /**
     * 
     * @param {Entity} entity Entidad que se va a añadir a la posición pointer. Se traduce a tile si pertenece al mapa
     * @param {pointer} pointer Coordenadas en world space que se traduciran a tiles y se utilizan como posicion de la entidad
     */
    addEntity(entity, pointer)
    {
        //this._levelTilemap.add
    }

    createTileSelector() {

        //  Our tile selection window
        var tileSelector = this.scene.add.group();
    
        var tileSelectorBackground = this.scene.make.graphics()
                                    .fillRect(0, 0, 1000, 200)
                                    .fillStyle(0xAAAAAA, 0.5);

    
        tileSelector.add(tileSelectorBackground);
    
        var tileStrip = tileSelector.create(96, 8, "tile_set_img");
        tileStrip.inputEnabled = true;

        tileStrip.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, (pointer) => {
            this.pickTile(this, pointer);
        });
    
        tileSelector.fixedToCamera = true;
    
        //  Our painting marker
        this._marker = this.scene.add.graphics();
        this._marker.lineStyle(2, 0x000000, 1);
        this._marker.strokeRect(0, 0, this._levelTilemap.tileWidth, this._levelTilemap.tileHeight);
    
    }

    pickTile(pGrid, pointer) {
        // console.log(sprite)
        //pGrid._currentTile = 
        var aux = Math.floor(pointer.x / this._tilePxSize);
        pGrid._currentTile = (pGrid._currentTile +1)%12;
    }

    updateMarker(ptestGrid) {

        var tileXY = ptestGrid._levelTilemap.worldToTileXY(this.scene.input.activePointer.worldX, 
                                                           this.scene.input.activePointer.worldY);

        this._marker.x = this._levelTilemap.tileToWorldX(tileXY.x);
        this._marker.y = this._levelTilemap.tileToWorldY(tileXY.y);

        if (this.scene.input.mousePointer.isDown)
        {
            if(this._currentMode == "PUT_ENTITY"){
                var scaleFact = (this._screenTileSize/ this._tilePxSize);
                ptestGrid._levelTilemap.putTileAt(ptestGrid._currentTile, tileXY.x, tileXY.y, ptestGrid._layer);

                console.log("AddTile: " + ptestGrid._currentTile + ", pos: " + tileXY.x + ", " + tileXY.y);
            }
            else if (this._currentMode == "REMOVE_ENTITY"){
                ptestGrid._levelTilemap.removeTileAt(tileXY.x, tileXY.y, ptestGrid._layer);
                console.log("RemoveTile: " + ptestGrid._currentTile + ", pos: " + tileXY.x + ", " + tileXY.y);
            }else if (this._currentMode == "SELECT_ENTITY"){
                
            }
            
        }
    }
    //#endregion

} // class EditorGrid


export{

    EditorGrid

};