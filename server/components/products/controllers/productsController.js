const productsService = require("../services/productsServices");


const GETproducts = async(req, res, next) => {
    console.log("GET products!");
    let response = await productsService.getProducts();
    res.json({
        status: `Ok`,
        result: `Productos: ${response} `
    });
}

const GETproduct = async(req, res, next) => {
    console.log("GET product!");
    const id = req.params.id;
    let product = await productsService.getProductById(id);
    res.json({
        status: `Ok`,
        result: `Producto: ${product} `
    });
}

const POSTproduct = async(req, res, next) => {
    console.log("POST product!");
    let product = req.body;
    let result = await productsService.postProduct(product);
    res.json({
        status: `Ok`,
        result: `Producto agregado: ${result} `
    });
}

const PUTproduct = async(req, res, next) => {
    console.log("PUT product!");
    let { id } = req.params;
    let { newProduct } = req.body;
    let result = await products.updateProductById(id, newProduct);

    res.json({
        status: `Ok`,
        result: `Producto agregado: ${result} `
    });
}

const DELproduct = async(req, res, next) => {
    console.log("DELETE product!");
    let { id } = req.params;
    let result = await productsService.deleteById(id);
}


const BATCHProduct = async(req, res, next) => {
    console.log("Ejecutando Desafio 9 !");

    let result = await productsService.batchScript();
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
    DELproduct,
    BATCHProduct
};