import {Player} from "../entities/Player.js"
import {Enemy} from "../entities/Enemy.js"
import {EnemySlow} from "../entities/EnemySlow.js"
import {EnemyFast} from "../entities/EnemyFast.js"

import {Factory} from "./Factory.js"

class EntityFactory extends Factory{

    constructor(){
        super();

        this.factory["player"] = Player;
        this.factory["enemy"] = Enemy;
        this.factory["enemy_slow"] = EnemySlow;
        this.factory["enemy_fast"] = EnemyFast;
    }

    create(scene, name, config){
        return new this.factory[name](scene, config);
    }
}

export{

    EntityFactory

};