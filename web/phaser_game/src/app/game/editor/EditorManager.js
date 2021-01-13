/**
 * Enum con los tipos de mensajes que podemos enviar
 */
const EditorMode = {

    IDLE: "IDLE",
    PUT_ENTITY: "PUT_ENTITY", 
    REMOVE_ENTITY: "REMOVE_ENTITY",
    SELECT_ENTITY: "SELECT_ENTITY"

}; // EditorMode


class EditorManager{

    _scene = null;
    _mode = null;

    _info = null;

    constructor(scene){
        this._scene = scene;
        this._mode = EditorMode.IDLE;
        this._info = {};
    }

    setMode(new_mode, new_info){
        this._mode = new_mode;
        this._info = new_info;

        console.log(this._mode);
    }

}


export {

    EditorManager,
    EditorMode

};