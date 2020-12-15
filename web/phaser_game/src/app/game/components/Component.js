class Component{

    _entity = null;

    _active = false;
    

    constructor(entity){
        this._entity = entity;
        this._active = true;
    }

    init(){
    }

    update(time, delta){ 
    }

    isActive(){
        return this._active;
    }

    setActive(active){
        this._active = active;
    }
}

export{

    Component

};