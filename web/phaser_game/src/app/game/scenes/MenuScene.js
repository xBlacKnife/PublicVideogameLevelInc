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

        // Llama al manager de botones que inicialmente los creara
        this._buttons_manager = new ButtonManager(this, "menu_scene_buttons_config") 

    } // preload


    create(){

        super.create();

    } // create


    update(time, delta){

        super.update(time, delta);

    } // update

} // class MenuScene

export  {

    MenuScene

};