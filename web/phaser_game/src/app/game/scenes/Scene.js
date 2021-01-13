import {ComponentFactory} from "../factories/ComponentFactory.js"
import {EntityFactory} from "../factories/EntityFactory.js"


/////////////////////////////////////////////////////////////////////
/////////////////////////////   Scene   /////////////////////////////
/////////////////////////////////////////////////////////////////////

/**
 * Clase Scene. Hereda de las escenas proporcionadas por Phaser. 
 * Estas contienen una serie de metodos que se controlaran solos, sin 
 * la necesidad de que el programador los invoque (preload, create y update).
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


    /**
     * Manager de botones
     */
    _buttons_manager = null;


    //#endregion
    

/////////////////////////////////////////////////////////////////////


    /**
     * Constructora de la clase padre Scene.
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
     * se hace separado del "preload" porque en esta funcion se
     * usaran los elementos previamente cargados
     */
    create(){

        // Por cada entidad en la escena
        this._entities.forEach(element =>{

            if (element != null)
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
     * La variable "delta" se usa mayoritariamente en los movimientos de los 
     * personajes Esto se hace para que en todos los ordenadores vaya igual
     * independientemente de lo bueno que sea el ordenador. Esto no significa
     * que en todos los ordenadores va a ir perfecto, lo que quiere decir es
     * que los personajes estaran en el mismo momento en el mismo sitio.
     * 
     * Por ejemplo: Cuando te dan bajadas de FPS, el juego va a tirones y te
     * mueves a saltos. Estos saltos te colocan en la posicion que deberias tener
     * correspondiente al tiempo que ha pasado. (Es un poco lio explicarlo con palabras, 
     * si no entendeis esto y quereis entenderlo, preguntadme).
     * 
     * @param {Number} time Tiempo desde que se inicio el juego
     * @param {Number} delta Tiempo desde el ultimo tik
     */
    update(time, delta){

        // Por cada entidad en la escena
        this._entities.forEach(element =>{
            
            // Si la entidad está activa
            if (element != null && element.active) 
                // Se llama a su update
                element.update(time, delta);
        })

    } // update

    
    /**
     * Crea las entidades de la escena a partir de los JSONS cargados.d
     */
    createEntities(config){

        // Recorre toda la lista de entidades dentro del JSON
        config["entities"].forEach(element =>{
            
            // Crea la entidada
            let e = this._entity_factory.create(this, element["name"], element)

            // Si es distinto de null, la añade a la lista de entidades
            if (e != null) {
                this._entities.push(e);
            }
        })

    } // createEntities
    createCollider(){
        //Collide with the enemy -> return to origin
        this.physics.add.collider(
            this._entities[0],
            this._entities[1],
            function (player,enemy_low){
                player.x = 0.25
                player.y = 0.5
            }.bind(this)); 
        this.physics.add.collider(
            this._entities[0],
            this._entities[2],
            function (player,enemy_fast){
                player.x = 0.25
                player.y = 0.5
            }.bind(this)); 
        this.physics.add.collider(
            this._entities[0],
            this._entities[3],
            function (player,fuego){
                player.x = 0.25
                player.y = 0.5
            }.bind(this)); 
    }
    //#endregion

} // class Scene


export{

    Scene

};