const Product = require('../../../models/products');

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
        console.log(req.body);
        const { title, description } = req.body;
        const product = new Product({ title, description });

        try {
            const result = await Product.save();
            return result;
        } catch (err) {
            console.log(`Producto no encontrado: ${err}`);
            return null;
        }
    }


    async updateProductById(id, newProduct) {
        const { title, description } = req.body;
        const id = req.params.id;
        const newProduct = ({ title, description });

        try {
            const result = await Product.findByIdAndUpdate(id, newProduct);
            return result;
        } catch (err) {
            console.log(`Producto no encontrado: ${err}`);
            return null;
        }

    }

    async deleteProductById(id) {
        const id = req.params.id;
        await Product.findByIdAndRemove(id);

        res.json({
            status: 'Producto eliminado',
        })
    }


}