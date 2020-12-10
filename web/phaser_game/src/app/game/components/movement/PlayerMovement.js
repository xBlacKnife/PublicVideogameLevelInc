import {MessageID} from "../../listener_pattern/Messages.js";
import {Movement} from "./Movement.js";

class PlayerMovement extends Movement{

    _move_left = false;
    _move_right = false;

    constructor(entity, config){
        super(entity, config);
    }

    init(){
        this._entity.addListener(MessageID.PLAYER_LEFT, 
            (move) => this._move_left = move
        );

        this._entity.addListener(MessageID.PLAYER_RIGHT, 
            (move) => this._move_right = move
        );
    }

    update(time, delta){

        if (this._move_left) 
            this._entity.body.setVelocityX(-this._velX * delta);
        else if (this._move_right)
            this._entity.body.setVelocityX(this._velX * delta);
        else
            this._entity.body.setVelocityX(0);

    }

}

export {

    PlayerMovement

}