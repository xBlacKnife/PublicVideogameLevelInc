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
const TILES_PATH = ASSETS_PATH + "tilemaps/tiles/";

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
        this.loadSpritesheets();
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


    /**
     * Carga las imágenes.
     */
    loadImages(){

        this.load.image("menu_background", IMAGE_PATH + "menu/background.png");

        this.load.image("phaser_logo", IMAGE_PATH + "phaser_logo.png");
        this.load.image("mario_maker", IMAGE_PATH + "mario_maker.png");

        // ParallaxScroll
        this.load.image("jung_1", IMAGE_PATH + "parallax/jungle/jung_1.png");
        this.load.image("jung_2", IMAGE_PATH + "parallax/jungle/jung_2.png");
        this.load.image("jung_3", IMAGE_PATH + "parallax/jungle/jung_3.png");
        this.load.image("jung_4", IMAGE_PATH + "parallax/jungle/jung_4.png");

        this.load.image("tile_set_img", TILES_PATH + "tilesetEditorTest.png")

        this.load.image("items_pannel", IMAGE_PATH + "editor/items_pannel.png");

    } // loadImages


    /**
     * Carga las spritesheets.
     */
    loadSpritesheets(){

        this.load.spritesheet("player_sheet", IMAGE_PATH + "spritesheets/player_sheet.png", { frameWidth: 45, frameHeight: 45 })

        // tileset
        this.load.spritesheet("tile_set", TILES_PATH + "tilesetEditorTest.png", { frameWidth: 32, frameHeight: 32 })

        // Botones Menu Principal
        this.load.spritesheet("menu_button_control", IMAGE_PATH + "menu/control_button.png", {frameWidth: 66, frameHeight: 75});
        this.load.spritesheet("menu_button_sound", IMAGE_PATH + "menu/sound_button.png", {frameWidth: 66, frameHeight: 75});
        this.load.spritesheet("menu_button_play", IMAGE_PATH + "menu/play_button.png", {frameWidth: 301, frameHeight: 90});
        this.load.spritesheet("menu_button_edit", IMAGE_PATH + "menu/edit_button.png", {frameWidth: 301, frameHeight: 90});

        // Botones Editor
        this.load.spritesheet("editor_button_put_entity", IMAGE_PATH + "editor/put_button.png", {frameWidth: 100, frameHeight: 50});
        this.load.spritesheet("editor_button_select_entity", IMAGE_PATH + "editor/select_button.png", {frameWidth: 100, frameHeight: 50});
        this.load.spritesheet("editor_button_remove_entity", IMAGE_PATH + "editor/remove_button.png", {frameWidth: 100, frameHeight: 50});
        this.load.spritesheet("editor_button_save_level", IMAGE_PATH + "editor/save_button.png", {frameWidth: 100, frameHeight: 50});
        this.load.spritesheet("editor_button_load_level", IMAGE_PATH + "editor/load_button.png", {frameWidth: 100, frameHeight: 50});
        this.load.spritesheet("editor_button_test_level", IMAGE_PATH + "editor/test_button.png", {frameWidth: 100, frameHeight: 50});
        this.load.spritesheet("editor_button_tile", IMAGE_PATH + "editor/tile_button.png", {frameWidth: 100, frameHeight: 50});
        this.load.spritesheet("editor_button_fire", IMAGE_PATH + "editor/fire_button.png", {frameWidth: 100, frameHeight: 50});


        //objetos
        this.load.spritesheet("fuego_sheet", IMAGE_PATH + "spritesheets/fuego_sheet.png", { frameWidth: 32, frameHeight: 32})

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

        this.load.json("parallax_config", CONFIG_JSON_PATH + "parallax_config.json");

        this.load.json("play_scene_entities_config", CONFIG_JSON_PATH + "play_scene_entities.json")
        this.load.json("menu_scene_buttons_config", CONFIG_JSON_PATH + "menu_scene_buttons.json");
        this.load.json("editor_scene_buttons_config", CONFIG_JSON_PATH + "editor_scene_buttons.json");

    } // loadJsons


    /**
     * Crea la animaciones.
     */
    createAnims(){

        // PLAYER ANIMATIONS
        this.anims.create({
            key: 'idle1',
            frames: this.anims.generateFrameNumbers('player_sheet', { start: 0, end: 4 }),
            frameRate: 10,
            repeat: 1
        });
        this.anims.create({
            key: 'idle2',
            frames: this.anims.generateFrameNumbers('player_sheet', { start: 5, end: 14 }),
            frameRate: 10,
            repeat: 1
        });
        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNumbers('player_sheet', { start: 15, end: 20 }),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'jump',
            frames: this.anims.generateFrameNumbers('player_sheet', { start: 21, end: 40 }),
            frameRate: 10,
            repeat: 1
        });

        // FIRE ANIMATIONS
        this.anims.create({
            key: 'idlefuego',
            frames: this.anims.generateFrameNumbers('fuego_sheet', { start: 0, end: 5 }),
            frameRate: 10,
            repeat: -1
        });
        /*this.anims.create({
            key: 'anim_player_idle',
            frames: this.anims.generateFrameNumbers('player_sheet', { start: 4, end: 4 }),
            frameRate: 10,
            repeat: -1
        });

        //ANIMATION DEL FUEGO
        this.anims.create({
            key: 'burning',
            frames: this.anims.generateFrameNumbers('fuego_sheet', { start: 0, end: 5 }),
            frameRate: 10,
            repeat: -1
        });*/

    } // createAnims

    //#endregion

} // class LoadScene


export{

    LoadScene

};