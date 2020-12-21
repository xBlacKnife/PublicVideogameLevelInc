import {Component} from "../Component.js";

/////////////////////////////////////////////////////////////////////
///////////////////////////   Movement   ////////////////////////////
/////////////////////////////////////////////////////////////////////


/**
 * Classe Movement. Se encargara de los movimientos de las diversas 
 * entidades.
 */
class Movement extends Component{

    //#region VARIABLES

    /**
     * Velocidad en el eje X.
     */
    _velX = 0;

    /**
     * Velocidad en el eje Y.
     */
    _velY = 0;

    //#endregion


/////////////////////////////////////////////////////////////////////

    
    /**
     * Constructora de la clase Movement. 
     * 
     * @param {Entity} entity Entidad a la que pertenece el componente.
     * @param {Dict} config Diccionario con la configuracion.
     */
    constructor(entity, config){

        super(entity);

        this._velX = config.velX;
        this._velY = config.velY;

    } // constructor


/////////////////////////////////////////////////////////////////////


    //#region METODOS

    update(time, delta){

    } // update

    //#endregion

} // class Movement

export{

    Movement

};