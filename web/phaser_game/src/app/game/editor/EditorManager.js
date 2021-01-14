import {MessageID} from "../listener_pattern/Messages"

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

        this.createListeners();
    }

    createListeners(){
        this._scene.events.addListener(
            MessageID.PUT_ENTITY,  // Mensaje que gestionara
            (info) => this.setMode(EditorMode.PUT_ENTITY, info),    // Gestion del mensaje si lo recibe
            this);  

        this._scene.events.addListener(
            MessageID.SELECT_ENTITY,  // Mensaje que gestionara
            (info) => this.setMode(EditorMode.SELECT_ENTITY, info),    // Gestion del mensaje si lo recibe
            this); 

        this._scene.events.addListener(
            MessageID.REMOVE_ENTITY,  // Mensaje que gestionara
            (info) => this.setMode(EditorMode.REMOVE_ENTITY, info),    // Gestion del mensaje si lo recibe
            this);  

        this._scene.events.addListener(
            MessageID.EDITOR_TEST,  // Mensaje que gestionara
            (info) => this.setMode(EditorMode.TEST, info),    // Gestion del mensaje si lo recibe
            this); 

        this._scene.events.addListener(
            MessageID.EDITOR_IDLE,  // Mensaje que gestionara
            (info) => this.setMode(EditorMode.IDLE, info),    // Gestion del mensaje si lo recibe
            this);  
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