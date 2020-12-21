import {MessageID} from "../listener_pattern/Messages";

import {Entity} from "./Entity.js"

/////////////////////////////////////////////////////////////////////
/////////////////////////////   Enemy   /////////////////////////////
/////////////////////////////////////////////////////////////////////


/**
 * Clase Enemy. Es una entidad que servira de padre para los distintos
 * enemigos del juego.
 */
class Enemy extends Entity{

    //#region VARIABLES

    /**
     * TEST: Tecla "E"
     */
    _key_e = null;

    //#endregion

/////////////////////////////////////////////////////////////////////


    /**
     * Constructora de la clase Enemy.
     * 
     * @param {Scene} scene Escena a la que pertenece la entidad
     * @param {Dict} config Diccionario con la configuracion de la entidad
     */
    constructor(scene, config){
        super(scene, config);

        // TEST: Almacena la tecla E
        this._key_e = scene.input.keyboard.addKey('E');  // Get key object
        
    } // constructor


/////////////////////////////////////////////////////////////////////


    //#region METODOS

    init(){

        super.init();

        // TEST: Se esta añadiendo a la escena para poder recibir 
        // los mensajes
        this.scene.events.addListener(
            MessageID.PLAYER_KILL_ENEMY,    // Mensaje que gestionara
            (arg1) => console.log(arg1),    // Gestion del mensaje si lo recibe
            this);                          // Le digo a la escena que me añado yo

    } // init
                    

    update(time, delta){

        super.update(time, delta);

        // TEST: Si la tecla E esta pulsada
        if (this._key_e.isDown){

            this.scene.events.emit(
                MessageID.ENEMY_ATTACK_PLAYER,  // Mensaje
                10);                            // Informacion que lleva el mensaje
        }

    } // update

    //#endregion

} // class Enemy

export{

    Enemy

};