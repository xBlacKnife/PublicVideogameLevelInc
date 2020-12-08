import PlayerController from "../components/controller/PlayerController.js"
import PlayerMovement from "../components/movement/PlayerMovement.js";
import Entity from "./Entity.js"

export default class Player extends Entity{  

    constructor(scene, config){
        super(scene, config);
    }

    init(){
        super.init();
    }
}