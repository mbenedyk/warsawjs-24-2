export class Product {

    constructor(options) {
        Object.keys(options).forEach((property) => {
            this[property] = options[property];
        });
    }

    getName() {
        return this.name.slice(0, 20);
    }

    getDescription() {
        const description = this.description || '';
        return description.slice(0, 30);
    }

}