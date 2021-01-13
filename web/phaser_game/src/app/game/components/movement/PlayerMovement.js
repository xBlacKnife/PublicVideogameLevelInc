import {MessageID} from "../../listener_pattern/Messages.js";
import {Movement} from "./Movement.js";

/////////////////////////////////////////////////////////////////////
////////////////////////   PlayerMovement   /////////////////////////
/////////////////////////////////////////////////////////////////////


/**
 * Clase PlayerMovement. Sera la encargada de gestionar el movimiento
 * del jugador.
 */
class PlayerMovement extends Movement{

    //#region VARIABLES

    /**
     * True: indica que el jugador se debe mover a la izquierda
     * False: indica que el jugador NO se debe mover a la izquierda
     */
    _move_left = false;


    /**
     * True: indica que el jugador se debe mover a la derecha
     * False: indica que el jugador NO se debe mover a la derecha
     */
    _move_right = false;

    //Jump
    _move_up = false;
    //

    //#endregion


/////////////////////////////////////////////////////////////////////


    //#endregion

    /**
     * Constructora de la clase PlayerMovement.
     * 
     * @param {Entity} entity Entidad a la que pertenece el componente.
     * @param {Dict} config Diccionario de configuracion.
     */
    constructor(entity, config){

        super(entity, config);

    } // constructor


/////////////////////////////////////////////////////////////////////    


    //#region METODOS

    init(){

        // Se esta añadiendo a la entidad como componente que puede 
        // escuchar mensajes. En este caso recibira cuando el jugador
        // quiera moverse a la izquierda
       // this._entity.addListener(
       //     MessageID.PLAYER_LEFT,              // Mensaje
      //      (move) => this._move_left = move,   // Gestion del mensaje
     //       this                                // Me añado yo mismo
      //  );

        // Se esta añadiendo a la entidad como componente que puede 
        // escuchar mensajes. En este caso recibira cuando el jugador
        // quiera moverse a la derecha
        this._entity.addListener(
            MessageID.PLAYER_RIGHT,             // Mensaje
            (move) => this._move_right = move,  // Gestion del mensaje
            this                                // Me añado yo mismo
        );                                      
        //JUMP
        this._entity.addListener(
            MessageID.PLAYER_JUMP,             // Mensaje
            (move) => this._move_up = move,  // Gestion del mensaje
            this                                // Me añado yo mismo
        );

        //Camera Follow Player
        this._entity.scene.cameras.startFollow(this._entity);
        //gravity
        this._entity.body.setGravityY(500); 
    } // init

    update(time, delta){
        this._entity.body.setVelocityX(this._velX * delta);
        //Jump
        if (this._move_up)

        this._entity.body.setVelocityY(-250);



    } // update

    //#endregion

} // class PlayerMovement

export {

    PlayerMovement

}