import Server from "../server";

test('Server defined', () => {
    expect(typeof Server).toBe('object');
});


test('fetchProducts', async () => {
    var products = await Server.fetchProducts();

    expect(products).not.toBeNull();
});

test('fetchProducts is promise', () => {
    var potentialPromise = Server.fetchProducts();

    expect(typeof(potentialPromise['then'])).toBe('function');
});