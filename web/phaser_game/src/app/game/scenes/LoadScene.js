import {Scene} from "./Scene"

/////////////////////////////////////////////////////////////////////
///////////////////////////   LoadScene   ///////////////////////////
/////////////////////////////////////////////////////////////////////

// Paths de los recursos
const ASSETS_PATH = "assets/game/"
const IMAGE_PATH = ASSETS_PATH + "images/";
const SOUND_PATH = ASSETS_PATH + "sounds/";
const FONT_PATH = ASSETS_PATH + "fonts/";
const CONFIG_JSON_PATH = ASSETS_PATH + "config_jsons/";

/**
 * Clase LoadScene
 */
class LoadScene extends Scene{   

    /**
     * Constructora de la clase LoadScene, hija de Scene.
     */
    constructor(){

        super("LoadScene");

    } // constructor


/////////////////////////////////////////////////////////////////////


    //#region METODOS

    preload(){

        this.loadImages();
        this.loadSounds();
        this.loadFonts();
        this.loadJsons();

    } // preload


    create(){

        // Creacion de las animaciones
        this.createAnims();

        // Se cambia de escena, por lo que esta debera ser la 
        // ultima llamada de esta escena.
        this.scene.start("MenuScene");

    } // create


    update(time, delta){

    } // update

    //#region MÉTODOS PRIVADOS


    /**
     * Carga las imágenes.
     */
    loadImages(){

        // MENU
        this.load.image("menu_background", IMAGE_PATH + "menu/background.png");
        this.load.spritesheet("menu_button_control", IMAGE_PATH + "menu/control_button.png", {frameWidth: 66, frameHeight: 75});
        this.load.spritesheet("menu_button_sound", IMAGE_PATH + "menu/sound_button.png", {frameWidth: 66, frameHeight: 75});
        this.load.spritesheet("menu_button_play", IMAGE_PATH + "menu/play_button.png", {frameWidth: 301, frameHeight: 90});
        this.load.spritesheet("menu_button_edit", IMAGE_PATH + "menu/edit_button.png", {frameWidth: 301, frameHeight: 90});

        this.load.image("phaser_logo", IMAGE_PATH + "phaser_logo.png");
        this.load.image("mario_maker", IMAGE_PATH + "mario_maker.png");

        this.loadSpritesheets();

    } // loadImages


    /**
     * Carga las spritesheets
     */
    loadSpritesheets(){

        this.load.spritesheet("player_sheet", IMAGE_PATH + "spritesheets/dude.png", { frameWidth: 32, frameHeight: 48 })

    } // loadSpritesheets


    /**
     * Carga los sonidos.
     */
    loadSounds(){

    } // loadSounds


    /**
     * Carga las fuentes.
     */
    loadFonts(){

        this.load.bitmapFont('nokia16black', FONT_PATH + 'bitmapFonts/nokia16black.png', FONT_PATH + 'bitmapFonts/nokia16black.xml');

    } // loadFonts


    /**
     * Carga los jsons.
     */
    loadJsons(){

        this.load.json("play_scene_entities_config", CONFIG_JSON_PATH + "play_scene_entities.json")
        this.load.json("menu_scene_buttons_config", CONFIG_JSON_PATH + "menu_scene_buttons.json");

    } // loadJsons


    /**
     * Crea la animaciones.
     */
    createAnims(){

        // PLAYER ANIMATIONS
        this.anims.create({
            key: 'anim_player_left',
            frames: this.anims.generateFrameNumbers('player_sheet', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'anim_player_right',
            frames: this.anims.generateFrameNumbers('player_sheet', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'anim_player_idle',
            frames: this.anims.generateFrameNumbers('player_sheet', { start: 4, end: 4 }),
            frameRate: 10,
            repeat: -1
        });

    } // createAnims

    //#endregion

} // class LoadScene


export{

    LoadScene

};