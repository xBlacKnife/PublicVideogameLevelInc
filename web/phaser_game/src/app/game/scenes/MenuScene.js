import CustomButton from "../hud/CustomButton"
import Scene from "./Scene.js"

export default class MenuScene extends Scene{

    buttons_config = null;
    button_playscene = null;
    button_editorscene = null;

    constructor(){
        super("MenuScene");
    }

    preload(){
        this.buttons_config = this.cache.json.get("buttons_config").menuscene;
    }

    create(){
        this.add.text(0, 0, "MENU"); 

        this.create_buttons();  

        super.create();
    }

    update(time, delta){
        super.update(time, delta);
    }

    create_buttons(){
        
        // Play Button
        let play_button = this.buttons_config.play_button
        this.button_playscene = new CustomButton(
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
        this.add.existing(this.button_playscene);

        // Editor Button
        let editor_button = this.buttons_config.editor_button;
        this.button_editorscene = new CustomButton(
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
        this.add.existing(this.button_editorscene);
    }
}