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
        this._entity.addListener(
            MessageID.PLAYER_LEFT,              // Mensaje
            (move) => this._move_left = move,   // Gestion del mensaje
            this                                // Me añado yo mismo
        );

        // Se esta añadiendo a la entidad como componente que puede 
        // escuchar mensajes. En este caso recibira cuando el jugador
        // quiera moverse a la derecha
        this._entity.addListener(
            MessageID.PLAYER_RIGHT,             // Mensaje
            (move) => this._move_right = move,  // Gestion del mensaje
            this                                // Me añado yo mismo
        );                                      

    } // init

    update(time, delta){

        // Si se quiere mover a la izquierda
        if (this._move_left) 
            // Muevete a la izquierda
            this._entity.body.setVelocityX(-this._velX * delta);
        // Si se quiere mover a la derecha
        else if (this._move_right)
            // Muevete a la derecha
            this._entity.body.setVelocityX(this._velX * delta);
        // Si no se quiere mover
        else
            // No te muevas
            this._entity.body.setVelocityX(0);

    } // update

    //#endregion

} // class PlayerMovement

export {

    PlayerMovement

}