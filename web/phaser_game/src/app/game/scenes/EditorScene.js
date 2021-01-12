import {Scene} from "./Scene"
import {EditorGrid} from "../entities/TestGrid.js"

/////////////////////////////////////////////////////////////////////
//////////////////////////   EditorScene   //////////////////////////
/////////////////////////////////////////////////////////////////////

/**
 * Clase EditorScene
 */
class EditorScene extends Scene{

    //#region VARIABLES

    /**
     * JSON con la configuracion de las entidades.
     */
    _entities_config = null;

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

    } // preload


    create(){

        this.add.text(0, 0, "EDIT");
        
        this._entities.push(new EditorGrid(this, {"position":{"x": 0.0,"y": 0.0},
                                                  "spritesheet": "editor_sheet",}))
        super.create();
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