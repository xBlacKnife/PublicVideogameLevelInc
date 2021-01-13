import { Button } from "./Button";
import {EditorMode} from "../editor/EditorManager"

class ButtonEditor extends Button
{
    constructor(scene, config){

        super(scene, config);

        switch(config.function.type) {
            
            case "PUT_ENTITY":
                this.createPutEntityButton(config);
                break;

            case "REMOVE_ENTITY":
                break;

            case "SELECT_ENTITY":
                break;

            case "SAVE_LEVEL":
                break;

            case "LOAD_LEVEL":
                break;

        }

    } // constructor


/////////////////////////////////////////////////////////////////////


    createPutEntityButton(config){
        this.setTemplateInteraction(config);

        this.setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            // Cambia la escena asignada en el diccionario
            this.scene._editor_manager.setMode(EditorMode.PUT_ENTITY, {});
        });

    }


    createRemoveEntityButton(config){
        this.setTemplateInteraction(config);

        this.setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            // Cambia la escena asignada en el diccionario
            this.scene._editor_manager.setMode(EditorMode.REMOVE_ENTITY, {});
        });

    }


    createSelectEntityButton(config){
        this.setTemplateInteraction(config);

        this.setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            // Cambia la escena asignada en el diccionario
            this.scene._editor_manager.setMode(EditorMode.SELECT_ENTITY, {});
        });

    }

}

export{

    ButtonEditor

};