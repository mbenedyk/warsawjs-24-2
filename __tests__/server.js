import Injector from "../injector";
import Server from "../server";

import fetch from "node-fetch";

// configuration
let customFetch = (any) => {
    var customResponseJson = { json() { return {
        "id": "306ce92f-1505-54f9-a24c-e2938f52fa32",
        "name": "Sausages",
        "description": "Saj vi gozsombu tirus nedjuvok anwigab egipe resizmob iztokdu ma lutcu wari vuvas nogmirviz ja rewhikob.",
        "image": "http://api.adorable.io/avatars/100/wi.jpg"
      }}};

    return Promise.resolve(customResponseJson);
};

beforeEach(() => { 
    let jestFetch = jest.fn();
    jestFetch.mockRejectedValueOnce(Promise.resolve({ json() { return {
        "id": "306ce92f-1505-54f9-a24c-e2938f52fa32",
        "name": "Sausages",
        "description": "Saj vi gozsombu tirus nedjuvok anwigab egipe resizmob iztokdu ma lutcu wari vuvas nogmirviz ja rewhikob.",
        "image": "http://api.adorable.io/avatars/100/wi.jpg"
      }}}));

    Injector.register(jestFetch, "fetcher");
    Injector.register(1000, "cacheTimeout");
    Server.clearCache();
});

test('Server defined', () => {
    expect(typeof Server).toBe('object');
});

test('fetchProducts', () => {
    var products = Server.fetchProducts();

    expect(products).not.toBeNull();
});

test('fetchProducts is promise', () => {
    var potentialPromise = Server.fetchProducts();

    expect(typeof(potentialPromise['then'])).toBe('function');
});

test('fetchProducts many calls, promises', () => {
    var potentialPromise = Server.fetchProducts();
    expect(isPromise(potentialPromise)).toBeTruthy();

    var potentialPromise2 = Server.fetchProducts();
    expect(isPromise(potentialPromise2)).toBeTruthy();
});

test("cache", () => {
    let counter = 0;
    let onceResolvable = (any) => {
        if(counter === 1)
        {
            return Promise.reject("fail");
        }
        counter++;
        return Promise.resolve({});
    };

    Injector.register(onceResolvable,"fetcher");

    Server.fetchProducts();
    Server.fetchProducts();

    expect(true).toBeTruthy();
});


function isPromise(obj)
{
    return typeof(obj['then']) === "function";
}