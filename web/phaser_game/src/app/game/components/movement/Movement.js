import {Component} from "../Component.js";

class Movement extends Component{
    _velX = 0;
    _velY = 0;
    
    constructor(entity, config){
        super(entity);

        this._velX = config.velX;
        this._velY = config.velY;
    }

    update(time, delta){
    }
}

export{

    Movement

};