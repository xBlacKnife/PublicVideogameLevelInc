import {MessageID} from "../listener_pattern/Messages";

import {PlayerController} from "../components/controller/PlayerController.js";
import {PlayerMovement} from "../components/movement/PlayerMovement.js";
import {Entity} from "./Entity.js";

/////////////////////////////////////////////////////////////////////
////////////////////////////   Player   /////////////////////////////
/////////////////////////////////////////////////////////////////////


/**
 * 
 */
class Player extends Entity{  

    //#region VARIABLES

    /**
     * 
     */
    _key_p = null;

    //#endregion


/////////////////////////////////////////////////////////////////////    


    /**
     * 
     * @param {*} scene 
     * @param {*} config 
     */
    constructor(scene, config){
        super(scene, config);

        this._key_p = scene.input.keyboard.addKey('P');  // Get key object
        this.on('update', this.update, this);
    }


/////////////////////////////////////////////////////////////////////    


    //#region METODOS

    /**
     * 
     */
    init(){
        super.init();
        this.scene.events.addListener(MessageID.ENEMY_ATTACK_PLAYER, (arg1) => console.log(arg1), this);
    }


    /**
     * 
     */
    update(time, delta){
        super.update(time, delta);
        
        if (this._key_p.isDown){
            this.scene.events.emit(MessageID.PLAYER_KILL_ENEMY, "Ja ja ja, soy el mejor.");
        }
    }

    //#endregion

} // class Player


export{

    Player

};