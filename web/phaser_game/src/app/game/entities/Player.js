import {
    MessageID
} from "../listener_pattern/Messages";

import {PlayerController} from "../components/controller/PlayerController.js";
import {PlayerMovement} from "../components/movement/PlayerMovement.js";
import {Entity} from "./Entity.js";

class Player extends Entity{  

    p = null;

    constructor(scene, config){
        super(scene, config);

        this.p = scene.input.keyboard.addKey('P');  // Get key object
        this.on('update', this.update, this);
    }

    init(){
        super.init();
        this.scene.events.addListener(MessageID.ENEMY_ATTACK_PLAYER, (arg1) => console.log(arg1), this);
    }

    update(time, delta){
        super.update(time, delta);
        
        if (this.p.isDown){
            this.scene.events.emit(MessageID.PLAYER_KILL_ENEMY, "Ja ja ja, soy el mejor.");
        }
    }
}

export{

    Player

};