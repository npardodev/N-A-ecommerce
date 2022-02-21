const Product = require('../../../models/products');

const checkInArray = (id, array) => { return (array.filter(e => e.id === id).length > 0) ? true : false };

class Products {

    async getProducts() {
        try {
            const resultProducts = await Product.find();
            return resultProducts;
        } catch (err) {
            console.log(`Producto no encontrado: ${err}`);
            return null;
        }

    }

    async getProductById(id) {

        try {
            const product = await Product.findById(req.params.id);
            return product;
        } catch (err) {
            console.log(`Producto no encontrado: ${err}`);
            return null;
        }
    }

    async postProduct(product) {
        const prod = new Product({ title, description });

        try {
            const result = await prod.save();
            return result;
        } catch (err) {
            console.log(`Producto no encontrado: ${err}`);
            return null;
        }
    }


    async updateProductById(id, newProduct) {
        try {
            const result = await Product.findByIdAndUpdate(idProd, newProduct);
            return result;
        } catch (err) {
            console.log(`Producto no encontrado: ${err}`);
            return null;
        }

    }

    async deleteProductById(id) {

        try {
            const result = await Product.findByIdAndRemove(idProd);
            return result;
        } catch (err) {
            console.log(`Producto no encontrado: ${err}`);
            return null;
        }
    }
}

module.exports = new Products();