import PlayerController from "../components/controller/PlayerController.js";
import PlayerMovement from "../components/movement/PlayerMovement.js";
import EnemyMovement from "../components/movement/EnemyMovement.js";

import Factory from "./Factory.js"

export default class ComponentFactory extends Factory{

    constructor(){
        super();

        this.factory["player_movement"] = PlayerMovement;
        this.factory["player_controller"] = PlayerController;
        this.factory["enemy_movement"] = EnemyMovement;
    }

    create(name, config){
        return new this.factory[name](config[name]);
    }
}