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
                this.createRemoveEntityButton(config);
                break;

            case "SELECT_ENTITY":
                this.createSelectEntityButton(config);
                break;

            case "SAVE_LEVEL":
                this.createSaveLevelButton(config);
                break;

            case "LOAD_LEVEL":
                this.createLoadLevelButton(config);
                break;

            case "TEST_LEVEL":
                this.createTestLevelButton(config);
                break;

        }

    } // constructor


/////////////////////////////////////////////////////////////////////


    createPutEntityButton(config){
        this.setTemplateInteraction(config);

        this.setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.scene._editor_manager.setMode(EditorMode.PUT_ENTITY, {});
        });

    }


    createRemoveEntityButton(config){
        this.setTemplateInteraction(config);

        this.setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.scene._editor_manager.setMode(EditorMode.REMOVE_ENTITY, {});
        });

    }


    createSelectEntityButton(config){
        this.setTemplateInteraction(config);

        this.setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.scene._editor_manager.setMode(EditorMode.SELECT_ENTITY, {});
        });

    }

    createSaveLevelButton(config){
        this.setTemplateInteraction(config);

        this.setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            
        });

    }

    createLoadLevelButton(config){
        this.setTemplateInteraction(config);

        this.setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            
        });

    }

    createTestLevelButton(config){
        this.setTemplateInteraction(config);

        this.setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            // activar movimiento del Player, Colisión
            this.scene._test_start = true;
            this.scene.createCollider();
        });

    }

}

export{

    ButtonEditor

};