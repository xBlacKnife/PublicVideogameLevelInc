/////////////////////////////////////////////////////////////////////
////////////////////////////   Factory   ////////////////////////////
/////////////////////////////////////////////////////////////////////


/**
 * Clase Factory. Es la clase padre de una serie de factorias encargadas
 * de crear Objects a partir de cierta informacion.
 */
class Factory{

    /**
     * Diccionario que guarda la relacion clave-valor. La KEY sera un 
     * "string" que corresponde al nombre que se le proporcionara a 
     * un Object, y el VALUE sera la constructora de ese objeto
     */
    _factory = {};


/////////////////////////////////////////////////////////////////////


    /**
     * Constructora padre vacia. Se usara para añadir campos al 
     * diccionario.
     */
    constructor(){

    } // constructor

} // class Factory


export {

    Factory

};