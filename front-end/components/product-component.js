export class ProductsComponent {

    $el = document.createElement('div');
    $place = null;

    constructor($place, products = []) {
        this.$place = $place;
        this.compile(products);
    }

    compile(products) {
        products.forEach(product => {
            const $product = document.createElement('div');
            $product.classList.add('float-left');
            $product.classList.add('m-1');
            $product.style.width = `300px`;
            $product.innerHTML = `
                <div class="card">
                    <img class="card-img-top" src="${product.image}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${product.getName()}</h5>
                        <p class="card-text">${product.getDescription()}</p>
                    </div>
                </div>
            `;
            this.$el.appendChild($product);
        });
    }

    render() {
        [...this.$el.children].forEach(
            this.$place.appendChild.bind(this.$place)
        )
    }
}