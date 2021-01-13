import {Enemy} from "./Enemy.js"

class Fuego extends Enemy{
    constructor(scene, config){
        super(scene, config);
    }

    init(){
        super.init();
        this.play('burning');
    }

    update(time, delta){
        super.update(time, delta);
    }
}

export{

    Fuego

};