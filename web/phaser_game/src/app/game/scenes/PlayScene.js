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

        // Crea las entidades
        if (this._entities_config != null){

            this.createEntities(this._entities_config);
            this.createCollider();

        }
        // Se llama al "create" de Scene
        super.create();

    } // create


    update(time, delta){

        // Se llama al "update" de Scene
        super.update(time, delta);

    } // update

    //#endregion

} // class PlayScene

export{

    PlayScene

};