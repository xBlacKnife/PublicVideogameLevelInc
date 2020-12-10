import {Component} from "../Component.js";

class Controller extends Component{
    
    _keycodes = {}

    constructor(entity, config){
        super(entity);

        for (var key in config){
            this._keycodes[key] = this._entity.scene.input.keyboard.addKey(config[key]);
        }

    }

    init(){
        this._entity.scene.input.keyboard.on('keydown', this.checkKeys, this);
        this._entity.scene.input.keyboard.on('keyup', this.checkKeys, this);
    }

    update(time, delta){
    }

    checkKeys(){

    }

}

export{

    Controller

};