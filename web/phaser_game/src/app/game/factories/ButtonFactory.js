import {ButtonEditor} from "../hud/ButtonEditor"
import {ButtonMenu} from "../hud/ButtonMenu"
import {ButtonPutItemEditor} from "../hud/ButtonPutItemEditor"
import { Pannel } from "../hud/Pannel";

import {Factory} from "./Factory.js"

/////////////////////////////////////////////////////////////////////
/////////////////////////   ButtonFactory   /////////////////////////
/////////////////////////////////////////////////////////////////////


class ButtonFactory extends Factory{

    constructor(){

        super();

        this._factory["button_editor"] = ButtonEditor;
        this._factory["button_menu"] = ButtonMenu;
        this._factory["button_put_item_editor"] = ButtonPutItemEditor;
        this._factory["pannel"] = Pannel;

    } // constructor


/////////////////////////////////////////////////////////////////////


    /**
     * Metodo que crea una entidad a partir de cierta informacion.
     * Para ello necesita un "name" y se buscara ese valor en el 
     * diccionario.
     * 
     * @param {Scene} scene Escena a la que pertenece la entidad.
     * @param {String} name Nombre para buscar en el diccionario.
     * @param {Dict} config Configuracion de la entidad.
     */
    create(scene, name, config){

        let b = null;

        try{
            b = new this._factory[name](scene, config);
        }
        catch{
            console.error("[ButtonFactory] Error with \"" + name + "\" button.");
        }
        finally{
            return b;
        }   

    } // create


} // class ButtonFactory

export{

    ButtonFactory

};