let express = require('express');
const productsController = require('./controllers/productsController.js');
const productsRouterPath = '/api/productos';
const checkAuth = require('../../utils/middlewares/checkAuth.middleware');

const apiProducts = (app) => {
    let routerProducts = express.Router();
    app.use(productsRouterPath, routerProducts);

    //Rutas
    routerProducts.get('/test2', checkAuth, productsController.GETproducts);
}

module.exports = apiProducts;