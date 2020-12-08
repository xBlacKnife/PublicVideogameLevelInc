import Component from "../Component.js";

export default class Movement extends Component{
    velX = 0;
    velY = 0;
    
    constructor(config){
        super();

        this.velX = config.velX;
        this.velY = config.velY;
    }

    update(time, delta){
    }
}