require("dotenv").config();
const URI = 'mongodb+srv://npardodev:ruX66z44y1FM2lfA@cluster0.c4y0k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'; //Colocar url de mongo ATLAS

let config = {
    port: process.env.PORT | 8080,
    url: 'http://localhost',
    DB_NAME: 'na-ecommerce',
    DB_USER: 'npardodev',
    DB_PASS: 'ruX66z44y1FM2lfA',
    DB_PRODUCTS_COLLECTION: 'products',
    DB_CARTS_COLLECTION: 'carts',
    DB_ORDER_COLLECTION: 'orders',
    DB_URL: `mongodb+srv://${this.DB_USER}:${this.DB_PASS}@cluster0.c4y0k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    AUTH_TOKEN: 'proximamente!',
}

module.exports = { config };