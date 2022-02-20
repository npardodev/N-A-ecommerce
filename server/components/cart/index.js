let express = require('express');
const cartController = require('./controllers/cartController.js');
const cartRouterPath = '/api/carrito';

const apiShopCart = (app) => {
    let routerCart = express.Router();
    app.use(cartRouterPath, routerCart);

    routerCart.get('/test2', cartController.GETproducts);
}

module.exports = apiShopCart;