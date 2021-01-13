import {Scene} from "./Scene"
import {EditorGrid} from "../entities/TestGrid.js"
import { EditorManager } from "../editor/EditorManager";

/////////////////////////////////////////////////////////////////////
//////////////////////////   EditorScene   //////////////////////////
/////////////////////////////////////////////////////////////////////

/**
 * Clase EditorScene
 */
class EditorScene extends Scene{

    //#region VARIABLES

    _editor_manager = null;

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

        this._editor_manager = new EditorManager(this);

    } // preload


    create(){        
        this._entities.push(new EditorGrid(this, {"position":{"x": 0.0,"y": 0.0},
                                                  "spritesheet": "editor_sheet",}))
                                                  super.create();
        if (this._buttons_config != null){
            this.createButtons(this._buttons_config);
        }
    } // create


    update(time, delta){
        // Se llama al "update" de Scene
        super.update(time, delta);
    } // update

    //#endregion

} // class EditorScene


export{

    EditorScene
    
};