import {Product} from "../front-end/models/product";


test("getName_over20Chars_trimmedTo20", () => {
    let p = new Product({name: createString(30)});

    expect(p.getName().length).toBe(20);
});


test("getDescription_null_empty", () => {
    let p = new Product({description: null});

    expect(p.getDescription()).toBe("");
});


test("getDescription_over30Characters_trimmedTo30", () => {
    let p = new Product({description: createString(50)});
    
    expect(p.getDescription().length).toBe(30);
});


function createString(length)
{
    return '#'.repeat(length);
}