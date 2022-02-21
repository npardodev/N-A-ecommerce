const { config } = require("../../../config/config");


const cartServices = require("../services/cartServices");

class Cart {

    POSTcart = async(req, res, next) => {
        res.send("Crea carrito y devuelvo el id");
        //let response = await cartServices.cartCreate();
    }

    GETcart = async(req, res, next) => {
        res.send("Retorna el carrito y su informacion");
        //let response = await cartServices.cartGetInfo();
    }

    DELcart = async(req, res, next) => {
        res.send("Vacia un carrito y lo elimina");
        //let response = await cartServices.cartDelete();
    }

    GETproducts = async(req, res, next) => {
        res.json("Listado de productos en el carrito");
        //let response = await cartServices.getProducts();
    }

    POSTcartProduct = async(req, res, next) => {
        //let response = await cartServices.addProduct();
        res.json("Para incorporar productos al carrito por su id de producto");
    }

    DELcartProduct = async(req, res, next) => {
        //let response = await cartServices.deleteProduct();
        res.send("Eliminar un producto del carrito por su id de carrito y de producto");
    }
}


module.exports = new Cart();