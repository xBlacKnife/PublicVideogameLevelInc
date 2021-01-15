import {MessageID} from "../listener_pattern/Messages"

class Pannel extends Phaser.GameObjects.Container{

    _config = null;

    constructor(scene, config){
        super(
            scene, 
            config.position.x * scene.sys.canvas.width, 
            config.position.y * scene.sys.canvas.height
        );

        this._config = config;

        this.add(this.scene.add.sprite(0, 0, this._config.texture));

        this.setVisible(false);
 
        this.createOwnButtons();
        this.createListeners();

        this.scene.add.existing(this);

    } // constructor

    createOwnButtons(){
        this._config["buttons"].forEach(element => {
            let b = this.scene._button_factory.create(this.scene, element["type"], element);
            this.add(b);
        });
    }

    createListeners(){

        this.scene.events.addListener(
            MessageID.PUT_ENTITY,  // Mensaje que gestionara
            () => {
                this.setVisible(true);
            },    // Gestion del mensaje si lo recibe
            this
        );
    }

}

export{

    Pannel

};