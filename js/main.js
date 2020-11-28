const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        basketUrl: '/getBasket.json',
        products: [],
        basketProducts: [],
        imgCatalog: 'img/img-tv.jpg',
        isVisibleCart: false,
        userSearch: '',
        goods: []
    },

    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },

        addProduct() {
            //console.log(product.id_product);
        },

        addProductcatalog() {
            //console.log(product.id_product);
            this.products.push({
                img: 'img/img-tv.jpg',
                product_name: 'Монитор',
                price: 17000,
            })
        },
    },

    mounted() {
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                    console.log(el);
                }
            });
        this.getJson(`${API + this.basketUrl}`)
            .then(data => {
                this.goods = [...data.contents];
                for (let el of this.goods) {
                    this.basketProducts.push(el);
                    console.log(el);
                }
            });

        /*this.getJson(`getProducts.json`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                }
            })*/

    }
})

