class Injector {

    constructor()
    {
        this._instances = {};
    }

    register(instance, key){
        this._instances[key] = instance;
    }

    resolve(key)
    {
        return this._instances[key];
    }
}

const injectorInstance = new Injector();

export default injectorInstance;