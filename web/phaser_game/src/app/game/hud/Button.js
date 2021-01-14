/////////////////////////////////////////////////////////////////////
/////////////////////////////   Button   ////////////////////////////
/////////////////////////////////////////////////////////////////////


/**
 * Clase Button que contiene el comportamiento de los botones. Hereda
 * de la clase Sprite de Phaser, pero no se tratara como las demas 
 * entidades. Tendra su propio comportamiento.
 */
class Button extends Phaser.GameObjects.Sprite
{

    //#region VARIABLES

    //#endregion


/////////////////////////////////////////////////////////////////////


    /**
     * Constructora de la clase Button. Crea las animaciones que se
     * haran al interactuar con el boton y sus diferentes funcionalidades
     * dependiendo del tipo de boton.
     * 
     * @param {Scene} scene Escena a la que pertenece el boton.
     * @param {Dict} config Diccionario de configuracion.
     */
    constructor(scene, config){

        super(
            scene, 
            config.position.x * scene.sys.canvas.width, 
            config.position.y * scene.sys.canvas.height,
            config.texture
            );

        // Se añade el boton a la escena
        this.scene.add.existing(this);

        // Se crean las animaciones del boton al interactuar con el
        this.createAnimations(config);

    } // constructor


    /**
     * Crea las animaciones del boton segun su estado
     */
    createAnimations(config){

        for (let i in config.states){

            this.scene.anims.create({
                key: config.texture + '_' + config.states[i],
                frames: this.scene.anims.generateFrameNumbers(config.texture, { start: i, end: i }),
                repeat: -1
            });

        }

    } // createAnimations


    /**
     * Crea las interacciones basicas del boton.
     */
    setTemplateInteraction(config){

        this.setInteractive()
            // Funcionalidad al pasar el raton por encima
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () => {
                this.play(config.texture + "_over");
            })
            // Funcionalidad al sacar el raton de encima
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () =>{
                this.play(config.texture + "_up");
            })

    } // setTemplateInteraction


} // class Button

export{

    Button

};