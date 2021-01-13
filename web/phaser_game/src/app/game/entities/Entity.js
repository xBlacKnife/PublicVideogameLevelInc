/////////////////////////////////////////////////////////////////////
////////////////////////////   Entity   /////////////////////////////
/////////////////////////////////////////////////////////////////////

/**
 * Clase Entity. Hereda de la clase Sprite proporcionada por las fisicas
 * arcade de Phaser.
 */
class Entity extends Phaser.Physics.Arcade.Sprite{

    //#region VARIABLES

    /**
     * Diccionario de configuracion inicial de la entidad.
     */
    _config = null;
    

    /**
     * Lista de componentes que contienen la entidad.
     */
    _components = [];

    //#endregion


/////////////////////////////////////////////////////////////////////
   

    /**
     * Constructora de la clase Entity. Se encarga de crear el Sprite
     * y añadirlo a la escena.
     * 
     * @param {Scene} scene Escena a la que pertenece.
     * @param {Dict} config Diccionario de configuracion inicial de la 
     * entidad.
     */
    constructor(scene, config){

        /* Se llama a la constructora del padre (Sprite) con la 
           siguiente informacion: 
           1. Escena a la que pertenece .
           2. Coordenadas en el eje X.
           3. Coordenadas en el eje Y
           4. Imagen
           Las coordenadas estan normalizadas al tamaño de la pantalla,
           por lo que se indica en el rango [0, 1]
        */
        super(
            scene, 
            config.position.x * scene.sys.canvas.width, 
            config.position.y * scene.sys.canvas.height, 
            config.spritesheet[0]
        );

        this._config = config;

        // Se añade la entidad a la escena.
        this.scene.add.existing(this);

        // Se añade la entidad al sistema de fisicas.
        this.scene.physics.add.existing(this);

    } // constructor

    
/////////////////////////////////////////////////////////////////////


    //#region METODOS

    /**
     * Inicializa la entidad con unos valores predeterminados. Ademas,
     * crea sus componentes y los añade.
     */
    init(){

        // Crea los componentes
        for (var key in this._config.components) {
            let c = this.scene._component_factory.create(this, key, this._config.components);

            if (c != null){
                this._components.push(c);
            }
        }

        // Inicia los componentes
        this._components.forEach(element => {
            if (element != null){
                element.init();
            }
        })

    } // init


    /**
     * Actualiza el estado de la entidad.
     */
    update(time, delta){

        // Actualiza los componentes
        this._components.forEach(element => {

            if (element != null && element.isActive()){
                element.update(time, delta);
            }
            
        });

    } // update

    //#endregion

} // class Entity


export{

    Entity

};