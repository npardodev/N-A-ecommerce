let express = require('express');
const productsController = require('./controllers/productsController.js');
const productsRouterPath = '/api/productos';
const checkAuth = require('../../utils/middlewares/checkAuth.middleware');

const apiProducts = (app) => {
    let routerProducts = express.Router();
    app.use(productsRouterPath, routerProducts);

    //Rutas
    routerProducts.get('/desafio9', checkAuth, productsController.BATCHProduct);
    routerProducts.get('/:id?', checkAuth, productsController.GETproduct);
    routerProducts.put('/:id', checkAuth, productsController.PUTproduct);
    routerProducts.delete('/:id', checkAuth, productsController.DELproduct);
    routerProducts.get('/', checkAuth, productsController.GETproducts);
    routerProducts.post('/', checkAuth, productsController.POSTproduct);

}

module.exports = apiProducts;