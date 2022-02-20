const { config } = require("../../../config/config");
const Products = require('./../Products.js');
const products = new Products('./../../data/productos.txt');
//const productsService = require("../services/productsServices");


const GETproducts = async(req, res, next) => {
    console.log("Pedido de productos");
    res.json("Pedido de productos");
}

const GETproduct = async(req, res, next) => {
    res.json("Pedido de 1 producto");
    console.log("Pedido de 1 producto");
}

const POSTproduct = async(req, res, next) => {
    let product = req.body;
    try {
        let result = await products.save(product);
        res.json({ resultado: `Producto subido en forma correcta` });
    } catch {
        res.json({ resultado: `Error agregando producto` });
    }

}

const PUTproduct = async(req, res, next) => {
    let { id } = req.params;
    let { newProduct } = req.body;
    let result = await products.modifyById(id, newProduct);
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