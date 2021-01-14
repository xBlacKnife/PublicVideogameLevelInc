import {Scene} from "./Scene.js"

import{ParallaxScroll} from "../parallax/ParallaxScroll"

/////////////////////////////////////////////////////////////////////
///////////////////////////   PlayScene   ///////////////////////////
/////////////////////////////////////////////////////////////////////

/**
 * Clase PlayScene.
 */
class PlayScene extends Scene{   

    //#region VARIABLES

    _parallax_scroll = null;

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
        
        this._parallax_scroll = new ParallaxScroll(this, "parallax_config", "jungle");

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

        this._parallax_scroll.update(time, delta);

    } // update

    //#endregion

} // class PlayScene

export{

    PlayScene

};