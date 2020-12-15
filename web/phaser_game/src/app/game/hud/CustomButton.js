class CustomButton extends Phaser.GameObjects.Container
{
    _image = Phaser.GameObjects.Image;
    _config = null;

    _sound_on = true;

    constructor(scene, config){
        super(
            scene, 
            config.position.x * scene.sys.canvas.width, 
            config.position.y * scene.sys.canvas.height
            );

        this._config = config;

        switch(config.function.type){
            case "CHANGE_SCENE":
                this.createNextSceneButton();
                break;
            case "SOUND":
                this.createSoundButton();
                break;
            case "SHOW_CONTROLS":
                this.createControlsButton();
                break;
        }
    }


    createTemplateButton(){

        for (let i in this._config.states){
            console.log(this._config.texture + '_' + this._config.states[i])
            this.scene.anims.create({
                key: this._config.texture + '_' + this._config.states[i],
                frames: this.scene.anims.generateFrameNumbers(this._config.texture, { start: i, end: i }),
                repeat: -1
            });
        }

        // IMAGE
        this._image = this.scene.add.sprite(0, 0, this._config.texture);
        this.add(this._image);


        // DEFAULT SETTINGS
        this.setSize(this._image.width, this._image.height);
        this.setScale(this._config.scale.x, this._config.scale.y);
    }

    createNextSceneButton(){
        this.createTemplateButton();

        this.setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () => {
                this._image.play(this._config.texture + "_over");
            })
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () =>{
                this._image.play(this._config.texture + "_up");
            })
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                this.scene.scene.start(this._config.function.next_scene);
        });
    }

    createSoundButton(){  
        this.createTemplateButton();

        this.setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () => {
                if (this._sound_on){
                    this._image.play(this._config.texture + "_over_on");
                }
                else{
                    this._image.play(this._config.texture + "_over_off");
                }
            })
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () =>{
                if (this._sound_on){
                    this._image.play(this._config.texture + "_up_on");
                }
                else{
                    this._image.play(this._config.texture + "_up_off");
                }
            })
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () =>{
                this._sound_on = !this._sound_on;
                if (this._sound_on){
                    this._image.play(this._config.texture + "_over_on");
                }
                else{
                    this._image.play(this._config.texture + "_over_off");
                }
            });
    }

    createControlsButton(){
        this.createTemplateButton();

        this.setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () => {
                this._image.play(this._config.texture + "_over");
            })
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () =>{
                this._image.play(this._config.texture + "_up");
            });
    }
}

export{

    CustomButton

};