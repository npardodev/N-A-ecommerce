const apiProducts = require('../components/products');
const apiShopCart = require('../components/cart');

module.exports = app => {

    //apiCarrito(app);
    //apiAuth(app);
    apiProducts(app);
    apiShopCart(app);
}