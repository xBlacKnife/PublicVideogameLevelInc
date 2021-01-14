import {MessageID} from "../listener_pattern/Messages";

/**
 * Enum con los tipos de mensajes que podemos enviar
 */
const EditorMode = {

    IDLE: "IDLE",
    PUT_ENTITY: "PUT_ENTITY", 
    REMOVE_ENTITY: "REMOVE_ENTITY",
    SELECT_ENTITY: "SELECT_ENTITY",
    TEST: "TEST"

}; // EditorMode


class EditorManager{

    _scene = null;
    _mode = null;

    _info = null;

    _grid = null;

    constructor(scene, grid){
        this._scene = scene;
        this._mode = EditorMode.IDLE;
        this._info = {};
        this._grid = grid;
    }

    setMode(new_mode, new_info){
        this._mode = new_mode;
        this._info = new_info;

        this._grid.setGridMode(new_mode);

        if(new_mode === EditorMode.PUT_ENTITY){
            this._scene.events.emit(MessageID.ACTIVATE_PUT_ITEM_BUTTONS);     // Informacion que lleva el mensaje
        }else{
            this._scene.events.emit(MessageID.DEACTIVATE_PUT_ITEM_BUTTONS);     // Informacion que lleva el mensaje
        }
        console.log(this._mode);
    }

    getCurrentMode(){
        return this._mode;
    }
}


export {

    EditorManager,
    EditorMode

};