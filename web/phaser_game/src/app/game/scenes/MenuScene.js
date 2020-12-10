import CustomButton from "../hud/CustomButton"
import {Scene} from "./Scene.js"

/////////////////////////////////////////////////////////////////////
///////////////////////////   MenuScene   ///////////////////////////
/////////////////////////////////////////////////////////////////////

/**
 * Clase MenuScene
 */
class MenuScene extends Scene{

    //#region VARIABLES

    // Botones
    _buttons_config = null;
    _button_playscene = null;
    _button_editorscene = null;

    //#endregion


/////////////////////////////////////////////////////////////////////


    /**
     * Constructora de la clase MenuScene, hija de Scene
     */
    constructor(){

        super("MenuScene");

    } // constructor


    preload(){

        this._buttons_config = this.cache.json.get("buttons_config").menuscene;

    } // preload


    create(){

        this.add.text(0, 0, "MENU"); 

        this.createButtons();  

        super.create();

    } // create


    update(time, delta){

        super.update(time, delta);

    } // update


    createButtons(){
        
        // Play Button
        let play_button = this._buttons_config.play_button
        this._button_playscene = new CustomButton(
            this,
            play_button,
            this.add.text(
                play_button.text.position.x,
                play_button.text.position.y,
                play_button.text.text,
                play_button.text.style),
            ()=> {
                this.scene.start("PlayScene");
            });
        this.add.existing(this._button_playscene);

        // Editor Button
        let editor_button = this._buttons_config.editor_button;
        this._button_editorscene = new CustomButton(
            this,
            editor_button, 
            this.add.text(
                editor_button.text.position.x,
                editor_button.text.position.y,
                editor_button.text.text,
                editor_button.text.style),
            ()=> {
                this.scene.start("EditorScene");
            });
        this.add.existing(this._button_editorscene);

    } // createButtons

} // class MenuScene

export  {

    MenuScene

};