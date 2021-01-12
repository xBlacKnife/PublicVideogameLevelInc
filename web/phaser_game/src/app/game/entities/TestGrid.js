
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
        this._map = this.scene.add.tilemap();
        //  Add a Tileset image to the map
        coso = this._map.addTilesetImage("editor_sheet", null, 16, 16);
        
        alert(typeof(coso))

        this._layer = this._map.createDynamicLayer("level", "editor_sheet");

        //  Resize the world
        this._layer.resizeWorld();

        //  Create our tile selector at the top of the screen
        createTileSelector();

        this.scene.input.addMoveCallback(updateMarker, this);

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
        tileSelectorBackground.beginFill(0x000000, 0.5);
        tileSelectorBackground.drawRect(0, 0, 800, 34);
        tileSelectorBackground.endFill();
    
        tileSelector.add(tileSelectorBackground);
    
        var tileStrip = tileSelector.create(1, 1, 'editor_sheet');
        tileStrip.inputEnabled = true;
        tileStrip.events.onInputDown.add(pickTile, this);
    
        tileSelector.fixedToCamera = true;
    
        //  Our painting marker
        this._marker = this.scene.add.graphics();
        this._marker.lineStyle(2, 0x000000, 1);
        this._marker.drawRect(0, 0, 32, 32);
    
    }

    pickTile(sprite, pointer) {

        currentTile = this.scene.math.snapToFloor(pointer.x, 32) / 32;
    
    }

    updateMarker() {

        this._marker.x = this._layer.getTileX(this.scene.input.activePointer.worldX) * 32;
        this._marker.y =this. _layer.getTileY(this.scene.input.activePointer.worldY) * 32;
    
        if (this.scene.input.mousePointer.isDown)
        {
            this._map.putTile(this._currentTile, this._layer.getTileX(this._marker.x), this._layer.getTileY(this._marker.y), this._layer);
        }
    }
    //#endregion

} // class EditorGrid


export{

    EditorGrid

};