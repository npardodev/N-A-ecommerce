const Products = require('./../Products.js');
const productsService = require("../services/productsServices");

const GETproducts = async(req, res, next) => {
    console.log("Pedido de productos");
    let response = await productsService.getProducts();
    res.json({
        status: `Ok`,
        result: `Productos: ${response} `
    });
}

const GETproduct = async(req, res, next) => {
    const id = req.params.id;
    let product = await productsService.getProductById(id);
    res.json({
        status: `Ok`,
        result: `Producto: ${product} `
    });
}

const POSTproduct = async(req, res, next) => {
    let product = req.body;
    let result = await productsService.postProduct(product);
    res.json({
        status: `Ok`,
        result: `Producto agregado: ${result} `
    });
}

const PUTproduct = async(req, res, next) => {
    let { id } = req.params;
    let { newProduct } = req.body;
    let result = await products.updateProductById(id, newProduct);

    res.json({
        status: `Ok`,
        result: `Producto agregado: ${result} `
    });
}

const DELproduct = async(req, res, next) => {
    let { id } = req.params;
    let result = await products.deleteById(id);
}







/*
// Upload
routerProducts.post('/uploadProduct', upload.single('image'), (req, res, next) => {
    const file = req.file;
    const title = req.body.title;
    const price = req.body.price;

    if (!file) {
        const error = new Error('Por favor suba un archivo');
        error.httpStatusCode = 400;
        return next(error);
        res.json(`Error en la carga del productos`);

    } else {

        const newProduct = {
            title: title,
            price: price,
            thumbnail: `./uploads/${file.filename}`
        }
        products.save(newProduct);
        res.send(`Producto subido en forma correcta`);
    }

});
*/
module.exports = {
    GETproducts,
    GETproduct,
    POSTproduct,
    PUTproduct,
    DELproduct
};