import {ButtonManager} from "../hud/ButtonManager"
import {Scene} from "./Scene.js"

/////////////////////////////////////////////////////////////////////
///////////////////////////   MenuScene   ///////////////////////////
/////////////////////////////////////////////////////////////////////

/**
 * Clase MenuScene
 */
class MenuScene extends Scene{

    /**
     * Constructora de la clase MenuScene, hija de Scene
     */
    constructor(){

        super("MenuScene");

    } // constructor


    preload(){

        // Pone la imagen de fondo
        this.add.image(0, 0, 'menu_background').setOrigin(0);

        this._buttons_config = this.cache.json.get("menu_scene_buttons_config"); 

    } // preload


    create(){

        super.create();
        if (this._buttons_config != null){
            this.createButtons(this._buttons_config);
        }

    } // create


    update(time, delta){

        super.update(time, delta);

    } // update

} // class MenuScene

export  {

    MenuScene

};