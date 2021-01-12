import {Scene} from "./Scene"

/////////////////////////////////////////////////////////////////////
//////////////////////////   EditorScene   //////////////////////////
/////////////////////////////////////////////////////////////////////

/**
 * Clase EditorScene
 */
class EditorScene extends Scene{

    /**
     * Constructora de la clase EditorScene, hija de Scene.
     */
    constructor(){

        super("EditorScene");

    } // constructor


/////////////////////////////////////////////////////////////////////


    //#region METODOS

    preload(){
        this.load.image('editor_back_01', 'assets/game/images/editor/back_01.png');
        this.load.image('editor_back_02', 'assets/game/images/editor/back_02.png');
        this.load.image('editor_back_03', 'assets/game/images/editor/back_03.png');
        this.load.image('editor_back_04', 'assets/game/images/editor/back_04.png');
        this.load.image('editor_back_05', 'assets/game/images/editor/back_05.png');

        this.load.image('editor_buttonBox', 'assets/game/images/editor/buttonBox.png');
    } // preload


    create(){
        this.b1 = this.add.tileSprite(0, 0, this.game.config.width*2, this.game.config.height*2, 'editor_back_01');
        this.b2 = this.add.tileSprite(0, 0, this.game.config.width*2, this.game.config.height*2, 'editor_back_02');
        this.b3 = this.add.tileSprite(0, 0, this.game.config.width*2, this.game.config.height*2, 'editor_back_03');
        this.b4 = this.add.tileSprite(0, 0, this.game.config.width*2, this.game.config.height*2, 'editor_back_04');
        this.b5 = this.add.tileSprite(0, 0, this.game.config.width*2, this.game.config.height*2, 'editor_back_05');

        this.add.image(0, 0, 'editor_buttonBox').setOrigin(0);
        //this._buttons_manager = new ButtonManager(this, "menu_scene_buttons_config")
    } // create


    update(time, delta){
        this.b5.tilePositionX += 0.4
        this.b4.tilePositionX += 0.3
		this.b3.tilePositionX += 0.2
		this.b2.tilePositionX += 0.1
    } // update

    //#endregion

} // class EditorScene


export{

    EditorScene
    
};