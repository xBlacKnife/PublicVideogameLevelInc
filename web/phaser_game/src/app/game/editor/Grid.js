
import { Utils } from "phaser";
import { PassThrough } from "stream";
import {Entity} from "../entities/Entity.js";

/////////////////////////////////////////////////////////////////////
////////////////////////////   Grid   /////////////////////////////
/////////////////////////////////////////////////////////////////////

/**
 * Enum con los tipos de mensajes que podemos enviar
 */
const EditorMode = {

    IDLE: "IDLE",
    PUT_ENTITY: "PUT_ENTITY", 
    REMOVE_ENTITY: "REMOVE_ENTITY",
    SELECT_ENTITY: "SELECT_ENTITY"

}; // EditorMode


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
    _tilePxSize = 16;

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


    _map = null;
    _layer = null;
    
    _marker = null;
    _currentTile = null;

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
        this.init();

        // this._tilePxSize = config.tilePxSize;
        
        // this._currentMode = ModesEnum.SELECT_ENTITY;

    } // constructor


/////////////////////////////////////////////////////////////////////    


    //#region METODOS

    init(){

        super.init();
        
        var tilesX = this.scene.textures.get("editor_sheet");
        console.log(tilesX);
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
                               this._tilePxSize, this._tilePxSize, 0x000000, 0)
                               .setOutlineStyle(0xEE9144);

        console.log(this._levelTilemap);
        //  Add a Tileset image to the map  assets/game/images/spritesheets/tilesetEditorTest.png
        this._levelTilemap.addTilesetImage('tileset', "editor_sheet");

        var coso = this._levelTilemap.getTileset('tileset'); 

      //-- [DESDE JSON, pillar los datos del tilemap]  

        this._levelTilemap.createBlankDynamicLayer("editorLayer", coso);

        this._layer = this._levelTilemap.getLayer("editorLayer");
        
        //  Create our tile selector at the top of the screen
        this.createTileSelector();
        var eg = this;
        var fun = function(){eg.updateMarker(eg)};
        this.scene.input.on('pointermove', fun);
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
        this._levelTilemap.add
    }

    createTileSelector() {

        //  Our tile selection window
        var tileSelector = this.scene.add.group();
    
        var tileSelectorBackground = this.scene.make.graphics();
        tileSelectorBackground.fillStyle(0x000000, 0.5);
        tileSelectorBackground.fillRect(0, 0, 800, 34);

    
        tileSelector.add(tileSelectorBackground);
    
        var tileStrip = tileSelector.create(100, 200, 'editor_sheet');
        tileStrip.inputEnabled = true;

        tileStrip.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, (pointer) => {
            this.pickTile(this, pointer);
        });
    
        tileSelector.fixedToCamera = true;
    
        //  Our painting marker
        this._marker = this.scene.add.graphics();
        this._marker.lineStyle(2, 0x000000, 1);
        this._marker.fillRect(0, 0, 32, 32);
    
    }

    pickTile(pGrid, pointer) {
        // console.log(sprite)
        pGrid._currentTile = Phaser.Math.FloorTo(pointer.x, 16) / 16;
    }

    updateMarker(ptestGrid) {

        var tileXY = ptestGrid._levelTilemap.worldToTileXY(this.scene.input.activePointer.worldX, 
                                                           this.scene.input.activePointer.worldY);
        
        if (this.scene.input.mousePointer.isDown && tileXY != null)
        {
            ptestGrid._levelTilemap.putTileAt(ptestGrid._currentTile, tileXY.x, tileXY.y, ptestGrid._layer);
            console.log("Tile: " + ptestGrid._currentTile + ", pos: " + tileXY.x + ", " + tileXY.y);
        }
    }
    //#endregion

} // class EditorGrid


export{

    EditorGrid

};