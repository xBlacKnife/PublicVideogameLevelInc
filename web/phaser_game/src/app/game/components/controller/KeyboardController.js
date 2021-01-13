import { Entity } from "../../entities/Entity.js";
import {MessageID} from "../../listener_pattern/Messages.js";
import {Controller} from "./Controller.js"

/////////////////////////////////////////////////////////////////////
//////////////////////   KeyboardController   ///////////////////////
/////////////////////////////////////////////////////////////////////


/**
 * Clase KeyboardController. Gestiona las pulsaciones de teclado.
 */
class KeyboardController extends Controller{

    /**
     * Constructora de la clase KeyboardController
     * 
     * @param {Entity} entity Entidad a la que pertenece el componente.
     * @param {Dict} config Diccionario con la configuracion.
     */
    constructor(entity, config){

        super(entity, config);

    } // constructor


/////////////////////////////////////////////////////////////////////


    //#region METODOS

    init(){

        super.init();

        this.checkKeys();

    } // init


    update(time, delta){
          
    } // update

    
    checkKeys(){

        // ---- LEFT
        // Si la tecla para moverse a la izquierda se pulsa.
        this._keycodes["left"].on('down', () => {
            this._entity.emit(
                MessageID.PLAYER_LEFT,
                true);
        })

        // Si la tecla para moverse a la izquierda se levanta.
        this._keycodes["left"].on('up', () => {
            this._entity.emit(
                MessageID.PLAYER_LEFT,
                false);
        })


        // ---- RIGHT
        // Si la tecla para moverse a la derecha se pulsa.
        this._keycodes["right"].on('down', () => {
            this._entity.emit(
                MessageID.PLAYER_RIGHT,
                true);
        })

        // Si la tecla para moverse a la derecha se levanta.
        this._keycodes["right"].on('up', () => {
            this._entity.emit(
                MessageID.PLAYER_RIGHT,
                false);
        })
         // ---- JUMP
        // Si la tecla para saltar se pulsa.
        this._keycodes["jump"].on('down', () => {
            this._entity.emit(
                MessageID.PLAYER_JUMP,
                true);
        })

        // Si la tecla para saltar se levanta.
        this._keycodes["jump"].on('up', () => {
            this._entity.emit(
                MessageID.PLAYER_JUMP,
                false);
        })
    } // checKeys

    //#endregion
}

export {

    KeyboardController

};