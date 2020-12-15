import Enemy from "../entities/Enemy.js";
import Player from "../entities/Player.js"
import {Scene} from "./Scene.js"

/////////////////////////////////////////////////////////////////////
///////////////////////////   PlayScene   ///////////////////////////
/////////////////////////////////////////////////////////////////////

/**
 * Clase PlayScene.
 */
class PlayScene extends Scene{   

    //#region VARIABLES

    /**
     * JSON con la configuracion de las entidades.
     */
    _entities_config = null;

    //#endregion


/////////////////////////////////////////////////////////////////////


    /**
     * Constructora de la clase PlayScene, hija de Scene.
     */
    constructor(){

        super("PlayScene");

    } // constructor


/////////////////////////////////////////////////////////////////////


    //#region METODOS

    preload(){

        this._entities_config = this.cache.json.get("play_scene_entities_config");

    } // preload

    
    create(){

        this.add.text(0, 0, "PLAY");

        this.createEntities();

        // Se llama al "create" de Scene
        super.create();

    } // create


    update(time, delta){

        // Se llama al "update" de Scene
        super.update(time, delta);

    } // update


    /**
     * Crea las entidades de la escena a partir de los JSONS cargados.d
     */
    createEntities(){

        // Recorre toda la lista de entidades dentro del JSON
        if (this._entities_config != null){
            this._entities_config["entities"].forEach(element =>{
                
                // Crea la entidada
                let e = this._entity_factory.create(this, element["name"], element)

                // Si es distinto de null, la añade a la lista de entidades
                if (e != null) {
                    this._entities.push(e);
                }
            })
        }

    } // createEntities

    //#endregion

} // class PlayScene

export{

    PlayScene

};