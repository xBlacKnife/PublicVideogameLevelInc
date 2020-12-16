import {KeyboardController} from "../components/controller/KeyboardController.js";
import {PlayerMovement} from "../components/movement/PlayerMovement.js";
import {EnemyMovement} from "../components/movement/EnemyMovement.js";

import {Factory} from "./Factory.js"

/////////////////////////////////////////////////////////////////////
///////////////////////   ComponentFactory   ////////////////////////
/////////////////////////////////////////////////////////////////////


/**
 * Constructura de la clase ComponentFactory. Como se puede observar
 * se crean diversos campos en el diccionario donde se añade
 * un "string" como KEY y la clase correspondiente como VALUE.
 */
class ComponentFactory extends Factory{

    constructor(){

        super();

        this._factory["player_movement"] = PlayerMovement;
        this._factory["enemy_movement"] = EnemyMovement;
        this._factory["keyboard_controller"] = KeyboardController;

    } // constructor


/////////////////////////////////////////////////////////////////////


    /**
     * Metodo que crea un componente a partir de cierta informacion.
     * Para ello necesita un "name" y se buscara ese valor en el 
     * diccionario.
     * 
     * @param {Entity} parent Entidad padre a la que pertenece el
     * componente
     * @param {String} name Nombre para buscar en el diccionario.
     * @param {Dict} config Configuracion de la entidad.
     */
    create(parent, name, config){

        let c = null;

        try{
            c = new this._factory[name](parent, config[name]);
        }
        catch{
            console.error("[ComponentFactory] Error with \"" + name + "\" component.");
        }
        finally{
            return c;
        }  

    } // create

} // class ComponentFactory

export{

    ComponentFactory

};