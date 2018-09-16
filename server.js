import Injector from "./injector";

const server_path = "http://localhost:3000/products";

class Server {
    
    constructor()
    {
        this._cache = null;
        this._cache_handler = null;
    }


    async fetchProducts(cache = false){

        if(cache && this._cache)
        {
            return Promise.resolve(this._cache);
        }

        let fetch = Injector.resolve("fetcher");
        return fetch(server_path).then(body => {
            
            let result = body.json();
            if(cache)
            {
                this.setTempData(result, Injector.resolve("cacheTimeout"));
            }
            
            return result;
        });
    }

    clearCache()
    {
        if(this._cache_handler){
            clearTimeout(this._cache_handler);
            this._cache_handler = null;
        }
        this._cache = null;
    }

    setTempData(data, time)
    {
        clearCache();

        this._cache = data;

        this._cache_handler = setTimeout(this.clearCache.call(this), time);
    }
}

export default new Server();