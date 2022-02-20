const { config } = require("../../../config/config");

//const productsService = require("../services/productsServices");


const GETproducts = async(req, res, next) => {
    console.log("Pedido de productos");
    res.json("Pedido de productos");
}

module.exports = {
    GETproducts,
};