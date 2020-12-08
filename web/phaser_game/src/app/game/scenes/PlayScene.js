import Enemy from "../entities/Enemy.js";
import Player from "../entities/Player.js"
import Scene from "./Scene.js"

export default class PlayScene extends Scene{   
    player = null;
    player_config = null;

    enemy = null;
    enemy_config = null;

    constructor(){
        super("PlayScene");
    }

    preload(){
        this.player_config = this.cache.json.get("player_config");
        this.enemy_config = this.cache.json.get("enemy_config");
    }

    create(){
        this.add.text(0, 0, "PLAY");

        this.create_entities();

        super.create();
    }

    update(time, delta){
        super.update(time, delta);
    }

    create_entities(){

        // PLAYER
        this.entities.push(this.entity_factory.create(this, "player", this.player_config));

        for (var key in this.enemy_config) {
            this.entities.push(this.entity_factory.create(this, key, this.enemy_config[key]));
        }
    }
}