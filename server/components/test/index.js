let express = require('express');
const testRouterPath = '/api/testApi';
const Products = require('../../models/products');

const apiTest = (app) => {
    let routerTest = express.Router();
    app.use(testRouterPath, routerTest);

    //Rutas
    routerTest.get('/', async(req, res, next) => {

        const pepe = await Products.find();
        console.log(pepe);

        Products.find({}, function(err, result) {
            if (err) {
                res.status(400).send({
                    'success': false,
                    'error': err.message
                });
            }
            res.status(200).send({
                'success': true,
                'data': result
            });
        });
    });

}

module.exports = apiTest;