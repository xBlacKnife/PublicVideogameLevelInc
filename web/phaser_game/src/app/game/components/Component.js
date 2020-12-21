/////////////////////////////////////////////////////////////////////
///////////////////////////   Component   ///////////////////////////
/////////////////////////////////////////////////////////////////////


/**
 * Class Component. Es la clase padre de las distintas funcionalidades
 * que pueden adquirir las entidades. Sirve para montarte una entidad
 * "a piezas".
 */
class Component{

    //#region VARIABLES

    /**
     * Entidad a la que pertenece el componente.
     */
    _entity = null;


    /**
     * Booleano de control para saber si el componente esta activo.
     */
    _active = false;

    //#endregion
   
    
/////////////////////////////////////////////////////////////////////


    /**
     * Constructora de la clase Component.
     * 
     * @param {Entity} entity Entidad a la que pertenece el componente.
     */
    constructor(entity){

        this._entity = entity;
        this._active = true;

    } // constructor


/////////////////////////////////////////////////////////////////////


    //#region METODOS

    /**
     * Inicializa los valores del componente.
     */
    init(){

    } // init


    /**
     * Actualiza el estado del componente.
     */
    update(time, delta){ 

    } // update


    /**
     * Devuelve si el componente esta activo.
     */
    isActive(){

        return this._active;

    } // isActive


    /**
     * Activa o desactiva el componente.
     * 
     * @param {Boolean} active Activa/desactiva
     */
    setActive(active){

        this._active = active;

    } // setActive

    //#endregion

} // class Component

export{

    Component

};