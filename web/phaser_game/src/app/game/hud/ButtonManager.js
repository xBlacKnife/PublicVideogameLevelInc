import {Button} from "./Button"

/////////////////////////////////////////////////////////////////////
/////////////////////////   ButtonManager   /////////////////////////
/////////////////////////////////////////////////////////////////////


/**
 * Clase ButtonManager. Se encargara de controlar las posibles 
 * funcionalidades que tengan los botones de la escena en su conjunto.
 */
class ButtonManager
{

    //#region VARIABLES

    /**
     * Escena a la que pertenece el manager.
     */
    _scene = null;


    /**
     * Diccionario con la configuracion de los botones de la escena.
     */
    _config = null;


    /** 
     * Lista con los botones de la escena.
     */
    _buttons = [];

    //#endregion


/////////////////////////////////////////////////////////////////////


    /**
     * Constructora de la clase ButtonManager.
     * 
     * @param {Scene} scene Escena a la que pertenece el manager
     * @param {String} config_file Nombre del archivo donde se encuentra
     *                              la configuracion de los botones
     */
    constructor(scene, config_file)
    {

        this._scene = scene;

        this._config = this._scene.cache.json.get(config_file).buttons;

        // Por cada elemento que se encuentre en el archivo, crea un boton
        for (let element in this._config) {

            this._buttons.push(new Button(this._scene, this._config[element]));
        
        }

    } // constructor

} // ButtonManager

export{

    ButtonManager

};