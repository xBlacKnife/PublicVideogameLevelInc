import Scene from "./Scene.js"

export default class Main extends Scene{   

    constructor(){
        super("MainScene");
    }

    preload(){
        console.log('preload method');
    }

    create(){
        console.log('create method');
    }

    update(time, delta){
        console.log('update method');
    }
}