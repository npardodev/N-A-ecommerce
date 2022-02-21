let express = require('express');
const cartController = require('./controllers/cartController.js');
const cartRouterPath = '/api/carrito';

const apiShopCart = (app) => {
    let routerCart = express.Router();
    app.use(cartRouterPath, routerCart);

    //Rutas
    routerCart.post('/', cartController.POSTcart);
    routerCart.delete('/:id', cartController.DELcart);
    routerCart.get('/:id/productos', cartController.GETcartProducts);
    routerCart.post('/:id/productos', cartController.POSTcartProduct);
    routerCart.delete('/:id/productos/:id_prod', cartController.DELcartProduct);
}

module.exports = apiShopCart;