import Service from '../server';
import { ProductsComponent } from './components/product-component';
import { Product } from './models/product';
import Injector from "../injector";
import fetch from "node-fetch";

async function setup() {
    const $app = document.querySelector('#app');
Injector.register(fetch, "fetcher");
Injector.register(50000, "cacheTimeout");

    const products = await Service.fetchProducts();
    const models = products.map(p => new Product(p));
    const c = new ProductsComponent($app, models);
    c.render();
}

try {
    setup();
} catch (err) {
    console.error(err);
}