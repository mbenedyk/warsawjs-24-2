import {ProductsComponent as C} from "../front-end/components/product-component";
import {Product} from "../front-end/models/product";
import { JSDOM } from "jsdom"

beforeEach(() => {

    const dom = new JSDOM()
    
    global.window = dom.window
    global.document = window.document
});

afterEach(() =>{
    global.window = null;
    global.document = null;
});

test("render_elementsAdded", () => {
    let div = document.createElement("section");

    const productFactory = (name) => new Product({ name });
    const products = [
        productFactory('one'),
        productFactory('two'),
        productFactory('thrrre'),
    ];
    var c = new C(div, products);
    c.render();

    expect(div.childElementCount).toBe(3);
});

test("render_productDataRendered", () => {
    let div = document.createElement("section");

    const productFactory = (name) => new Product({ name });
    const products = [
        productFactory('one')
    ];
    var c = new C(div, products);
    c.render();

    expect(div.children[0].textContent.trim()).toBe('one');
});

