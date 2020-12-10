import {
    MessageID
} from "../listener_pattern/Messages";

import {Entity} from "./Entity.js"


class Enemy extends Entity{

    constructor(scene, config){
        super(scene, config);

        this.e = scene.input.keyboard.addKey('E');  // Get key object
        

    }

    init(){
        super.init();
        this.scene.events.addListener(MessageID.PLAYER_KILL_ENEMY, (arg1) => console.log(arg1), this);
    }

    update(time, delta){
        if (this.e.isDown){
            this.scene.events.emit(MessageID.ENEMY_ATTACK_PLAYER, 10);
        }
    }
}

export{

    Enemy

};