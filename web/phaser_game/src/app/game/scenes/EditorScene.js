import {Scene} from "./Scene"
import {EditorGrid} from "../editor/Grid.js"
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
    _editor_grid = null;

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

    } // preload


    create(){        
        
        this._entities.push(this._editor_grid);
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