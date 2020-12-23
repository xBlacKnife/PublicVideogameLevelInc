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

    /**
     * Booleano de control usado cuando el boton se encarga
     * de activa o desactivar el sonido.
     */
    _sound_on = true;

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

        // Segun el tipo de boton, se le asigna una funcionalidad
        switch(config.function.type){

            // Boton que sirve para cambiar la escena
            case "CHANGE_SCENE":
                this.createNextSceneButton(config);
                break;

            // Boton que controla el sonido
            case "SOUND":
                this.createSoundButton(config);
                break;

            // Boton para mostrar los controles
            case "SHOW_CONTROLS":
                this.createControlsButton(config);
                break;

        }

    } // constructor


/////////////////////////////////////////////////////////////////////


    //#region METODOS

    /**
     * Asigna la funcionalidad a aquellos botones que se encargan de
     * cambiar de escena
     */
    createNextSceneButton(config){

        // Añade las interacciones basicas
        this.setTemplateInteraction(config);

        this.setInteractive()
            // Funcionalidad al ser pulsado
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                // Cambia la escena asignada en el diccionario
                this.scene.scene.start(config.function.next_scene);
            });

    } // createNextSceneButton 


    /**
     * Asigna la funcionalidad a aquel boton encargado de activar
     * o desactivar el sonido.
     */
    createSoundButton(config){  

        // Estas interacciones son distintas a las basicas ya que aqui se
        // añade otro estado al boton en el que depende de si esta activo el
        // sonido
        this.setInteractive()
            // Funcionalidad al pasar el raton por encima
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OVER, () => {
                this.play(config.texture + "_over_" + ((this._sound_on) ? "on" : "off"));
            })
            // Funcionalidad al sacar el raton de encima
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () => {
                this.play(config.texture + "_up_" + ((this._sound_on) ? "on" : "off"));
            })
            // Funcionalidad al pulsar el boton
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                // Cambia el estado del bool
                this._sound_on = !this._sound_on;
                this.play(config.texture + "_over_" + ((this._sound_on) ? "on" : "off"));
            });

    } // createSoundButton


    /**
     * Asigna la funcionalidad a aquel boton encargado de sacar el panel
     * para poder ver los controles.
     */
    createControlsButton(config){

        // Añade las interacciones basicas
        this.setTemplateInteraction(config);

        this.setInteractive()
        // Funcionalidad al ser pulsado
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            // Muestra panel de controles
        });

    } // createControlsButton


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

    //#endregion

} // class Button

export{

    Button

};