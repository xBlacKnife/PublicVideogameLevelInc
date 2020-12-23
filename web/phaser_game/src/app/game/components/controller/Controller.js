import { Entity } from "../../entities/Entity.js";
import {Component} from "../Component.js";

/////////////////////////////////////////////////////////////////////
//////////////////////////   Controller   ///////////////////////////
/////////////////////////////////////////////////////////////////////


/**
 * Clase Controller. Principalmente gestionara el sistema de inputs.
 * Idealmente deberia tener al menos dos hijas: MouseController y 
 * KeyboardController. Esto ya se ira modificando si lo vemos necesario,
 * ya que el MOUSE solo se usara para botones y eso ya lo gestionan 
 * ellos solos. Por lo tanto, esta clase esta centrada a KeyBoard y 
 * a mando de Xbox/PS4
 */
class Controller extends Component{
    
    //#region VARIABLES

    /**
     * Diccionario que almacena como KEY un nombre para la tecla
     * y como valor, el Object tecla proporcionado por Phaser.
     */
    _keycodes = {}

    //#endregion


/////////////////////////////////////////////////////////////////////


    /**
     * Constructora de la clase Controller.
     * 
     * @param {Entity} entity Entidad a la que pertenece el componente.
     * @param {Dict} config Diccionario con la configuracion
     */
    constructor(entity, config){

        super(entity);

        // Por cada clave almacenada en la configuracion, va añadiendo 
        // un campo al diccionario
        for (var key in config){
            this._keycodes[key] = this._entity.scene.input.keyboard.addKey(config[key]);
        }

    } // constructor


/////////////////////////////////////////////////////////////////////


    //#region METODOS

    init(){

    } // init

    update(time, delta){

    } // update


    /**
     * Metodo que gestiona las pulsaciones.
     */
    checkKeys(){

    } // checkKeys

    //#endregion

} // class Controller


export{

    Controller

};