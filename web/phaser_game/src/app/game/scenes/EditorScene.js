import CustomButton from "../hud/CustomButton.js"

/////////////////////////////////////////////////////////////////////
//////////////////////////   EditorScene   //////////////////////////
/////////////////////////////////////////////////////////////////////

/**
 * Clase EditorScene
 */
class EditorScene extends Phaser.Scene{

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

    } // create

    update(time, delta){

    } // update

    //#endregion

} // class EditorScene


export{

    EditorScene
    
};