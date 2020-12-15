import {CustomButton} from "./CustomButton"

class ButtonManager
{
    _scene = null;
    _config = null;

    constructor(scene, config_file)
    {
        this._scene = scene;
        this._config = this._scene.cache.json.get("menu_scene_buttons_config").buttons;

        for (let element in this._config) {
            
            let conf = this._config[element];
    
            let aux_button = new CustomButton(this._scene, conf);
        
            this._scene.add.existing(aux_button);
        }
    }
}

export{

    ButtonManager

};