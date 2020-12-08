export default class Entity extends Phaser.GameObjects.Sprite{
    scene = null
    config = null;
    
    components = [];
    
    constructor(scene, config){
        super(
            scene, 
            config.position.x * scene.sys.canvas.width, 
            config.position.y * scene.sys.canvas.height, 
            config.spritesheet
            );

        scene.add.existing(this);

        this.scene = scene;
        this.config = config;
    }

    init(){
        for (var key in this.config.components) {
            this.components.push(this.scene.component_factory.create(key, this.config.components));
        }
    }

    update(time, delta){
        this.components.forEach(element => {
            element.update(time, delta);
        });
    }

}