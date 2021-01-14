import {Player} from "../entities/Player.js"
import {Enemy} from "../entities/Enemy.js"
import {EnemySlow} from "../entities/EnemySlow.js"
import {EnemyFast} from "../entities/EnemyFast.js"
import {Fuego} from "../entities/Fuego.js"

import {Factory} from "./Factory.js"

/////////////////////////////////////////////////////////////////////
/////////////////////////   EntityFactory   /////////////////////////
/////////////////////////////////////////////////////////////////////


/**
 * Clase EntityFactory. Es la encargada de crear las entidades en la
 * escena.
 */
class EntityFactory extends Factory{

    /**
     * Constructura de la clase EntityFactory. Como se puede observar
     * se crean diversos campos en el diccionario donde se añade
     * un "string" como KEY y la clase correspondiente como VALUE.
     */
    constructor(){

        super();

        this._factory["player"] = Player;
        this._factory["enemy"] = Enemy;
        this._factory["enemy_slow"] = EnemySlow;
        this._factory["enemy_fast"] = EnemyFast;
        this._factory["fuego"] = Fuego;

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

        let e = null;

        try{
            e = new this._factory[name](scene, config);
        }
        catch{
            console.error("[EntityFactory] Error with \"" + name + "\" entity.");
        }
        finally{
            return e;
        }   

    } // create


} // class EntityFactory

export{

    EntityFactory

};