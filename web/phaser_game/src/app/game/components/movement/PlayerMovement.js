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

    _camera_offset = [-300, 250];

    _oriY = 0;


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

        this._entity.body.collideWorldBounds = true;
        this._entity.body.setGravityY(300); 

    } // constructor


/////////////////////////////////////////////////////////////////////    


    //#region METODOS

    init(){

        this._oriY = this._entity.y;

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
        this._entity.scene.cameras.main.startFollow(this._entity);
        this._entity.scene.cameras.main.followOffset.set(this._camera_offset[0], this._camera_offset[1]);
    } // init

    update(time, delta){
        if(this._move_right)
            this._entity.body.setVelocityX(this._velX * delta);

        if (this._entity.y != this._oriY){
            this._entity.scene.cameras.main.followOffset.set(this._camera_offset[0], this._camera_offset[1] + (this._entity.y - this._oriY));
        }
        else{
            this._entity.scene.cameras.main.followOffset.set(this._camera_offset[0], this._camera_offset[1]);
        }


        //Jump cuando esta en el suelo 
        if (this._move_up /*&& this._entity.body.touching.down*/)
            this._entity.body.setVelocityY(-330);

    } // update

    //#endregion

} // class PlayerMovement

export {

    PlayerMovement

}