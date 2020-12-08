import CustomButton from "../hud/CustomButton.js"

export default class EditorScene extends Phaser.Scene{
    constructor(){
        super("EditorScene");
    }

    preload(){

    }

    create(){
        this.add.text(0, 0, "EDIT");
    }

    update(time, delta){

    }
}