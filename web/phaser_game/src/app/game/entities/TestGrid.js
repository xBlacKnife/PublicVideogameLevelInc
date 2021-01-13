
import { Utils } from "phaser";
import { PassThrough } from "stream";
import {MessageID} from "../listener_pattern/Messages";
import {Entity} from "./Entity.js";

/////////////////////////////////////////////////////////////////////
////////////////////////////   Grid   /////////////////////////////
/////////////////////////////////////////////////////////////////////


/**
 * Clase EditorGrid. Es la entidad que controla la colocacion en rejilla de los elementos
 */
class EditorGrid extends Entity{  

    //#region VARIABLES

    _map = null;
    _layer = null;
    
    _marker = null;
    _currentTile = null;
    
    _cursors = null;

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

    } // constructor


/////////////////////////////////////////////////////////////////////    


    //#region METODOS

    init(){

        super.init();

        //  Creates a blank tilemap
        this._map = this.scene.make.tilemap({
            // data: tileIdxArray,  // [ [], [], ... ]
            tileWidth: 16,
            tileHeight: 16,
            width: 12,
            height: 1
        });

        //  Add a Tileset image to the map  assets/game/images/spritesheets/tilesetEditorTest.png
        this._map.addTilesetImage('tileset', "editor_sheet");

        var coso = this._map.getTileset('tileset'); 


        this._map.createBlankDynamicLayer("editorLayer", coso);

        this._layer = this._map.getLayer("editorLayer");
        
        //  Create our tile selector at the top of the screen
        this.createTileSelector();
        var eg = this;
        var fun = function(){eg.updateMarker(eg)};
        this.scene.input.on('pointermove', fun);

        this._cursors = this.scene.input.keyboard.createCursorKeys();
    }


    update(time, delta){

        super.update(time, delta);
        
        // TEST: Si la tecla P esta pulsada
        if (this._cursors.left.isDown)
        {
            this.scene.camera.x -= 4;
        }
        else if (this._cursors.right.isDown)
        {
            this.scene.camera.x += 4;
        }

        if (this._cursors.up.isDown)
        {
            this.scene.camera.y -= 4;
        }
        else if (this._cursors.down.isDown)
        {
            this.scene.camera.y += 4;
        }
        
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
        tileStrip.setInteractive();
        var eg = this;
        var fun = function(){eg.pickTile(eg)};
        tileStrip.on('pointerdown', fun);
    
        tileSelector.fixedToCamera = true;
    
        //  Our painting marker
        this._marker = this.scene.add.graphics();
        this._marker.lineStyle(2, 0x000000, 1);
        this._marker.fillRect(0, 0, 32, 32);
    
    }

    pickTile(ptestGrid) {
        // ERROR TypeError: Cannot read property 'FloorTo' of undefined
        // importat math de phaser 3
        ptestGrid._currentTile = Phaser.Math.FloorTo(this.scene.input.activePointer.worldX, 32) / 32;
    }

    updateMarker(ptestGrid) {

        
        var tilePoint = ptestGrid._map.getTileAtWorldXY(this.scene.input.activePointer.worldX, 
                                                  this.scene.input.activePointer.worldY, true, 
                                                  this.scene.cameras.main, ptestGrid._layer);
    
        if (this.scene.input.mousePointer.isDown && tilePoint != null)
        {
            ptestGrid._map.putTileAt(ptestGrid._currentTile, tilePoint.x, tilePoint.y, ptestGrid._layer);
        }
    }
    //#endregion

} // class EditorGrid


export{

    EditorGrid

};