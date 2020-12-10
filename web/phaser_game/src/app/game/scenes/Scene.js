import {ComponentFactory} from "../factories/ComponentFactory.js"
import {EntityFactory} from "../factories/EntityFactory.js"


/////////////////////////////////////////////////////////////////////
/////////////////////////////   Scene   /////////////////////////////
/////////////////////////////////////////////////////////////////////

/**
 * Clase Scene
 */
class Scene extends Phaser.Scene{

    //#region VARIABLES

    /**
     * Lista de entidades que se encuentran en la escena.
     */
    _entities = [];


    /**
     * Factoria de entidades que sirve para crear las entidades
     * a partir de un "string".
     */
    _entity_factory = null;


    /**
     * Factoria de componentes que sirve para crear y añadir 
     * componentes a la entidad a partir de un "string".
     */
    _component_factory = null;


    //#endregion
    

/////////////////////////////////////////////////////////////////////


    /**
     * Constructora de la clase padre Scene, la cual hereda de las
     * escenas proporcionadas por Phaser. Estas contienen una serie de
     * metodos que se controlaran solos, sin la necesidad de que el
     * programador los invoque (preload, create y update).
     * que almacena Phaser para que el programador tenga facil acceso. ** Solo funciona con elementos de Phaser o heredados de estos **
     * 
     * @param {String} key Identificador del Object 
     */
    constructor(key){

        super(key);
        
        this._entity_factory = new EntityFactory();
        this._component_factory = new ComponentFactory();

    } // constructor


/////////////////////////////////////////////////////////////////////


    //#region METODOS

    /**
     * Funcion que se llama automaticamente por Phaser, ya que es
     * un overwrite de una funcion existente en Phaser.Scene.
     * 
     * Se usa para cargar los assets.
     */
    preload(){

    } // preload


    /**
     * Funcion que se llama automaticamente por Phaser, ya que es
     * un overwrite de una funcion existente en Phaser.Scene.
     * 
     * Se usa para crear las entidades y distintos valores. Esto 
     * se hace separado del "preload" porque usa los recursos cargados
     * en esta funcion.
     */
    create(){

        // Por cada entidad en la escena
        this._entities.forEach(element =>{

            // Se llama a su init (metodo parecido al create)
            element.init();

        })

    } // create


    /**
     * Funcion que se llama automaticamente por Phaser, ya que es
     * un overwrite de una funcion existente en Phaser.Scene.
     * 
     * Se llama una vez por cada tick y se usa para actualizar el
     * estado de las entidades y del juego.
     * 
     * @param {Number} time Tiempo desde que se inicio el juego
     * @param {Number} delta Tiempo desde el ultimo tik
     */
    update(time, delta){

        // Por cada entidad en la escena
        this._entities.forEach(element =>{
            
            // Si la entidad está activa
            if (element.active) 
                // Se llama a su update
                element.update(time, delta);
        })

    } // update


    //#endregion

} // class Scene


export{

    Scene

};