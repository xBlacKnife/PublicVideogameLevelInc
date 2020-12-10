import Enemy from "../entities/Enemy.js";
import Player from "../entities/Player.js"
import {Scene} from "./Scene.js"

/////////////////////////////////////////////////////////////////////
///////////////////////////   PlayScene   ///////////////////////////
/////////////////////////////////////////////////////////////////////

/**
 * Clase PlayScene
 */
class PlayScene extends Scene{   

    //#region VARIABLES

    /**
     * JSON con la configuracion del player.
     */
    _player_config = null;


    /**
     * JSON con la configuracion de los enemigos.
     */
    _enemy_config = null;

    //#endregion


/////////////////////////////////////////////////////////////////////


    /**
     * Constructora de la clase PlayScene, hija de Scene.
     */
    constructor(){

        super("PlayScene");

    } // constructor


/////////////////////////////////////////////////////////////////////


    //#region METODOS

    preload(){

        this._player_config = this.cache.json.get("player_config");
        this._enemy_config = this.cache.json.get("enemy_config");

    } // preload

    
    create(){

        this.add.text(0, 0, "PLAY");

        this.createEntities();

        // Se llama al "create" de Scene
        super.create();

    } // create


    update(time, delta){

        // Se llama al "update" de Scene
        super.update(time, delta);

    } // update


    /**
     * Crea las entidades de la escena a partir de los JSONS cargados.d
     */
    createEntities(){

        // PLAYER
        this._entities.push(this._entity_factory.create(this, "player", this._player_config));

        for (var key in this._enemy_config) {
            this._entities.push(this._entity_factory.create(this, key, this._enemy_config[key]));
        }

    } // createEntities

    //#endregion

} // class PlayScene

export{

    PlayScene

};