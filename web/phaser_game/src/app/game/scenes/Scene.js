import ComponentFactory from "../factories/ComponentFactory.js"
import EntityFactory from "../factories/EntityFactory.js"

export default class Scene extends Phaser.Scene{
    entities = [];

    entity_factory = null;
    component_factory = null;
    
    constructor(key){
        super(key);
        
        this.entity_factory = new EntityFactory();
        this.component_factory = new ComponentFactory();
    }

    preload(){

    }

    create(){
        this.entities.forEach(element =>{
            this.add.sprite(element);
            element.init();
        })
    }

    update(time, delta){
        this.entities.forEach(element =>{
            element.update(time, delta);
        })
    }
}