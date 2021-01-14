import {MessageID} from "../listener_pattern/Messages";

import {PlayerController} from "../components/controller/KeyboardController.js";
import {PlayerMovement} from "../components/movement/PlayerMovement.js";
import {Entity} from "./Entity.js";

/////////////////////////////////////////////////////////////////////
////////////////////////////   Player   /////////////////////////////
/////////////////////////////////////////////////////////////////////


/**
 * Clase Player. Es la entidad perteneciente al/los jugador/es.
 */
class Player extends Entity{  

    //#region VARIABLES

    /**
     * TEST: Tecla "P"
     */
    _key_p = null;

    _idle = null;

    //#endregion


/////////////////////////////////////////////////////////////////////    


    /**
     * Constructora de la clase Player
     * 
     * @param {Scene} scene Escena a la que pertenece la entidad
     * @param {Dict} config Diccionario con la configuracion de la entidad
     */
    constructor(scene, config){

        super(scene, config);

        // TEST: Almacena la tecla P
        this._key_p = scene.input.keyboard.addKey('P'); 

    } // constructor


/////////////////////////////////////////////////////////////////////    


    //#region METODOS

    init(){

        super.init();

        // TEST: Se esta añadiendo a la escena para poder recibir 
        // los mensajes
        this.scene.events.addListener(
            MessageID.ENEMY_ATTACK_PLAYER,  // Mensaje que gestionara
            (arg1) => console.log(arg1),    // Gestion del mensaje si lo recibe
            this);                          // Le digo a la escena que me añado yo


        this.addListener(
            MessageID.PLAYER_JUMP,             // Mensaje
            () => {
                this.play("jump", false);

                this.on("animationcomplete", () => {
                    if (this.anims.getCurrentKey() == "jump")
                        this.play("walk");
                }, this)
            },  // Gestion del mensaje
            this                                // Me añado yo mismo
        );

        this.addListener(
            MessageID.PLAYER_FLOOR,             // Mensaje
            () => {
                this.play("walk");
            },  // Gestion del mensaje
            this                                // Me añado yo mismo
        );

        this.body.collideWorldBounds = true;

        console.log(this)

        this.play("walk");
    }


    update(time, delta){

        super.update(time, delta);
        
        // TEST: Si la tecla P esta pulsada
        if (this._key_p.isDown){

            // Mando un mensaje a la escena
            this.scene.events.emit(
                MessageID.PLAYER_KILL_ENEMY,    // Mensaje 
                "Ja ja ja, soy el mejor.");     // Informacion que lleva el mensaje
        }
        
    }

    //#endregion

} // class Player


export{

    Player

};