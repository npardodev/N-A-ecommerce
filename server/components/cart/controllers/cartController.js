const { config } = require("../../../config/config");

//const productsService = require("../services/cartServices");


const GETproducts = async(req, res, next) => {
    console.log("Get al carrito");
    res.json("Get al carrito");
}

module.exports = {
    GETproducts,
};