import {Movement} from "./Movement.js";

class EnemyMovement extends Movement{
    constructor(entity, config){
        super(entity, config);
    }

    update(time, delta){
        //console.log(this.velX);
    }

}

export{

    EnemyMovement

};