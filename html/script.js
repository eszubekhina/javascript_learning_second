class ProductsList {
    constructor(container = '.products', renderFlag = false) {
        this.container = container;
        this.goods = [];//массив товаров
        this.allProducts = [];//массив объектов
        this.allCost;
        if (renderFlag) {
            this._getProducts()
                .then(data => { //data - объект js
                    this.goods = [...data];
                    this.render()
                });
        }
    }

    _getProducts() {
        return fetch(`jsons/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        this.allCost = 0;
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            this.allCost += productObj.price;
            block.insertAdjacentHTML('beforeend', productObj.render());
        }
        console.log('All cost of products: ' + this.allCost);
    }
}

class ProductItem {
    constructor(product, img = 'img/img-tv.jpg') {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }
    render() {
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" height=100 alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`
    }
}

class BasketItem {
    constructor(product, img = 'img/img-tv.jpg') {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }
    render() {
        return `<div class="basket-item" data-id="${this.id}">
                <img src="${this.img}" height=50 alt="Some img">
                <div class="desc">
                    <h4>${this.title}</h4>
                    <p class="text-price">${this.price} $</p>
                </div>
            </div>`
    }
}

class BasketProducts extends ProductsList {
    constructor(container = '.basket') {
        super();
        this.container = container;
        this._getProducts()
            .then(data => { //data - объект js
                this.goods = [...data.contents];
                this.render()
            });
    }

    _getProducts() {
        return fetch(`jsons/getBasket.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new BasketItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }

    }
}

function click_handler() {
    let list2 = new BasketProducts();
}

let list = new ProductsList('.products', true);
