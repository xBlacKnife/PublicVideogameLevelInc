import { Button } from "./Button";
import {MessageID} from "../listener_pattern/Messages";
import {PlacingTypes} from "../editor/Grid"

class ButtonPutItemEditor extends Button
{
    constructor(scene, config){

        super(scene, config);

        switch(config.function.type) {
            
            case "TILE":
                this.createTileButton(config);
                break;

            case "GAME_OBJECT":
                this.createGameObjectButton(config);
                break;
        }

        this.scene.events.addListener(
            MessageID.ACTIVATE_PUT_ITEM_BUTTONS,  // Mensaje que gestionara
            () => {
                this.setInteractive();
                this.setVisible(true);
                this.setActive(true);
            },    // Gestion del mensaje si lo recibe
            this);   
            
            this.scene.events.addListener(
                MessageID.DEACTIVATE_PUT_ITEM_BUTTONS,  // Mensaje que gestionara
                () => {
                    this.disableInteractive();
                    this.setVisible(false);
                    this.setActive(false);
            },    // Gestion del mensaje si lo recibe
            this);   

    } // constructor


/////////////////////////////////////////////////////////////////////


    createTileButton(config){
        this.setTemplateInteraction(config);

        this.setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {

            this.scene._editor_grid.setPlaceType(PlacingTypes.TILE);
        });

    }


    createGameObjectButton(config){
        this.setTemplateInteraction(config);

        this.setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.scene._editor_grid.setPlaceType(PlacingTypes.ENTITY, config.entity_conf);
        });

    }

}

export{

    ButtonPutItemEditor

};