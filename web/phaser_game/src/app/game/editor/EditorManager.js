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

        console.log(this._mode);
    }

}


export {

    EditorManager,
    EditorMode

};