import { Button } from "./Button";
import {EditorMode} from "../editor/EditorManager"
import {MessageID} from "../listener_pattern/Messages"

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
            this.scene.events.emit(MessageID.PUT_ENTITY, {}); 
        });

    }


    createRemoveEntityButton(config){
        this.setTemplateInteraction(config);

        this.setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.scene.events.emit(MessageID.REMOVE_ENTITY, {});
        });

    }


    createSelectEntityButton(config){
        this.setTemplateInteraction(config);

        this.setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.scene.events.emit(MessageID.SELECT_ENTITY, {});
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
            if (this.scene._editor_manager._mode != EditorMode.TEST)
                this.scene.events.emit(MessageID.EDITOR_TEST, {});
            else
                this.scene.events.emit(MessageID.EDITOR_TEST, {});
            //this.scene.createCollider();
        });

    }

}

export{

    ButtonEditor

};