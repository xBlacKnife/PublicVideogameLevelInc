import { ConsoleReporter } from "jasmine";

class ParallaxScroll{

    _scene = null;

    _images = [];

    _vels = [];

    _parallax_config = null;

    constructor(scene, config, name){

        this._scene = scene;

        this._parallax_config = this._scene.cache.json.get(config)[name];

        this._scene.cameras.main.setBackgroundColor(this._parallax_config["background_color"]);


        for(var i = 0; i < this._parallax_config["textures"].length; i++){
        
            this._images.push(this._scene.add.tileSprite(0, 0, 
                this._scene.sys.canvas.width, 
                this._scene.textures.get(this._parallax_config["textures"][i]).getSourceImage().height, 
                this._parallax_config["textures"][i])
                .setOrigin(0, 0).setScrollFactor(0, 0));

            this._vels.push(this._parallax_config["scroll_factor"] + (this._parallax_config["scroll_scale"] * i));
        }

    } // constructor

    update(time, delta){
        for(var i = 0; i < this._images.length; i++){
            this._images[i].tilePositionX += this._vels[i];
            this._images[i].setPosition(this._scene.cameras.main.x, 0);
        }
    }

}

export{

    ParallaxScroll

};