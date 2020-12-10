import Phaser from 'phaser';

export default class CustomButton extends Phaser.GameObjects.Container
{
    upImage = Phaser.GameObjects.Image;
    overImage = Phaser.GameObjects.Image;

    text = Phaser.GameObjects.Text;

    constructor(scene, config, text, function_click){
        super(
            scene, 
            config.position.x * scene.sys.canvas.width, 
            config.position.y * scene.sys.canvas.height
            );

        // IMAGE
        this.upImage = scene.add.image(0, 0, config.upTexture);
        this.add(this.upImage);
        this.overImage = scene.add.image(0, 0, config.overTexture);
        this.add(this.overImage);

        // TEXT
        this.text = text.setOrigin(0.5);
        this.add(this.text);

        // DEFAULT SETTINGS
        this.setSize(this.upImage.width, this.upImage.height);
        this.setScale(config.scale.x, config.scale.y);
        this.overImage.setVisible(false);

        // INTERACTION
        this.setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () => {
                this.upImage.setVisible(false);
                this.overImage.setVisible(true);
            })
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () =>{
                this.upImage.setVisible(true);
                this.overImage.setVisible(false);
            })
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, function_click);
    }
}