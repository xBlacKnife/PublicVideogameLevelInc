/////////////////////////////////////////////////////////////////////
////////////////////////////   Entity   /////////////////////////////
/////////////////////////////////////////////////////////////////////

/**
 * 
 */
class Entity extends Phaser.Physics.Arcade.Sprite{

    //#region VARIABLES

    /**
     * 
     */
    _config = null;
    
    /**
     * 
     */
    _components = [];

    //#endregion


/////////////////////////////////////////////////////////////////////
   

    /**
     * 
     */
    constructor(scene, config){
        super(
            scene, 
            config.position.x * scene.sys.canvas.width, 
            config.position.y * scene.sys.canvas.height, 
            config.spritesheet
            );
        this._config = config;

        this.scene.add.existing(this);
        this.scene.physics.add.existing(this);
    }

    
/////////////////////////////////////////////////////////////////////


    //#region METODOS

    /**
     * 
     */
    init(){

        for (var key in this._config.components) {
            this._components.push(this.scene._component_factory.create(this, key, this._config.components));
        }
        this._components.forEach(element => {
            element.init();
        })

    } // init


    /**
     * 
     * @param {*} time 
     * @param {*} delta 
     */
    update(time, delta){

        this._components.forEach(element => {
            element.update(time, delta);
        });

    } // update

    //#endregion

} // class Entity

export{

    Entity

};