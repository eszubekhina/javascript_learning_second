class ProductsList {
    constructor(container = '.products') {
        this.allCost = 0;
        this.container = container;
        this.goods = [];//массив товаров
        //this.allProducts=[];//массив объектов
        this._fetchProducts();
        this._costOfProducts();//метод, определяющий суммарную стоимость всех товаров
    }

    //метод, определяющий суммарную стоимость всех товаров
    _costOfProducts() {
        this.goods.forEach(goods => {
            this.allCost += goods.price;
        })
        console.log('All cost of products: ' + this.allCost);
    }
    /*
        let sum = 0;
        for (let i = 0; i < this.goods.length; i++) {
        sum += this.goods[i].price;
     //console.log(this.goods[i].price);
   }*/

    _fetchProducts() {
        this.goods = [
            { id: 1, title: 'Notebook', price: 2000 },
            { id: 2, title: 'Mouse', price: 20 },
            { id: 3, title: 'Keyboard', price: 200 },
            { id: 4, title: 'Gamepad', price: 50 },
        ];
    }

    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObject = new ProductItem(product);
            //this.allProducts.push(productObject);
            //block.innerHTML += productObject.render();
            block.insertAdjacentHTML('beforeend', productObject.render());
        }
    }
}

class ProductItem {
    constructor(product, img = 'img/img-tv.jpg') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }
    render() {
        return `<div class="product-item">
                <img src="${this.img}" height=150>
                <h3>${this.title}</h3>
                <p>${this.price}\u20bd</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductsList();
list.render();

//пустые классы для корзины товаров и элемента корзины товаров
class Card {
    constructor() {
        this.deleteProduct();
        this.addProduct();
    }
}

class CardItem {

}





