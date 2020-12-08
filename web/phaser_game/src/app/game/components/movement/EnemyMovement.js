import Movement from "./Movement.js";

export default class EnemyMovement extends Movement{
    constructor(config){
        super(config);
    }

    update(time, delta){
        console.log(this.velX);
    }

}