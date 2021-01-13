import {Scene} from "./Scene"
import {EditorGrid} from "../editor/Grid.js"
import { EditorManager, EditorMode } from "../editor/EditorManager";
import{ParallaxScroll} from "../parallax/ParallaxScroll"

/////////////////////////////////////////////////////////////////////
//////////////////////////   EditorScene   //////////////////////////
/////////////////////////////////////////////////////////////////////

/**
 * Clase EditorScene
 */
class EditorScene extends Scene{

    //#region VARIABLES

    _editor_manager = null;
    _editor_grid = null;

    _parallax_scroll = null;

    //#endregion

/////////////////////////////////////////////////////////////////////

    /**
     * Constructora de la clase EditorScene, hija de Scene.
     */
    constructor(){

        super("EditorScene");

    } // constructor


/////////////////////////////////////////////////////////////////////


    //#region METODOS

    preload(){

        this._buttons_config = this.cache.json.get("editor_scene_buttons_config"); 

        this._editor_grid = new EditorGrid(this, {"position":{"x": 1,"y": 1},
                                                  "spritesheet": "editor_sheet"});

        this._editor_manager = new EditorManager(this, this._editor_grid);

        this._parallax_scroll = new ParallaxScroll(this, "parallax_config", "jungle");

    } // preload


    create(){        
        
        this._entities.push(this._editor_grid);
        super.create();
        
        if (this._buttons_config != null){
            this.createButtons(this._buttons_config);
        }
        this._test_start = false;
    } // create


    update(time, delta){
        // Se llama al "update" de Scene
        super.update(time, delta);

        if (this._editor_manager._mode == EditorMode.TEST)
            this._parallax_scroll.update(time, delta);
    } // update

    //#endregion

} // class EditorScene


export{

    EditorScene
    
};