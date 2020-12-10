import {MessageID} from "../../listener_pattern/Messages.js";
import {Controller} from "./Controller.js"

class PlayerController extends Controller{

    constructor(entity, config){
        super(entity, config);
    }

    init(){
        super.init();
    }

    update(time, delta){
          
    }

    checkKeys(){
        this._entity.emit(MessageID.PLAYER_LEFT, this._keycodes["left"].isDown);
        this._entity.emit(MessageID.PLAYER_RIGHT, this._keycodes["right"].isDown);
    }
}

export {

    PlayerController

};