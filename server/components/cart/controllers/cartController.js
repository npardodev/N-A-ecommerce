const cartServices = require("../services/cartServices");

class Cart {

    POSTcart = async(req, res, next) => {
        let responseId = await cartServices.cartCreate();
        res.json({
            status: `Ok`,
            result: `Carrito creado, id: ${responseId} !`
        });
    }

    GETcart = async(req, res, next) => {
        const id = req.params.id;
        let response = await cartServices.cartGetInfo(id);
        res.json({
            status: `Ok`,
            result: `Carrito: ${response} !`
        });
    }

    DELcart = async(req, res, next) => {
        const id = req.params.id;
        let response = await cartServices.cartDelete(id);
        res.json({
            status: 'Ok',
            result: "Carrito eliminado!"
        });

    }

    GETcartProducts = async(req, res, next) => {
        const id = req.params.id;
        let response = await cartServices.getProducts(id);
        res.json({
            status: 'Ok',
            productos: response
        });
    }

    POSTcartProduct = async(req, res, next) => {
        const id = req.params.id;
        const { title, description, price, img, date } = req.body
        const newProduct = ({
            title,
            description,
            price,
            img,
            date,
        })
        let response = await cartServices.addProduct(id, newProduct);
        res.json({
            status: 'Ok',
            productos: `Producto agregado`
        });
    }

    DELcartProduct = async(req, res, next) => {
        const idCart = req.params.id;
        const idProd = req.params.id_prod;

        let response = await cartServices.deleteProduct(idCart, idProd);
        res.json({
            status: 'Ok',
            productos: `Producto eliminado del carrito`
        });
    }
}


module.exports = new Cart();