import fetch from "node-fetch";
const server_path = "http://localhost:3000/products";

class Server {
    
    async fetchProducts(){
        return fetch(server_path).then(body => body.json());
    }
}

export default new Server()