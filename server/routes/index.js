const apiProducts = require('../components/products');
const apiMessages = require('../components/messages');
const apiShopCart = require('../components/cart');
const apiTest = require('../components/test');

module.exports = app => {

    //apiCarrito(app);
    //apiAuth(app);
    apiTest(app);
    apiMessages(app);
    apiProducts(app);
    apiShopCart(app);
}