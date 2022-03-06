const Product = require('../../../models/products');
const checkInArray = (id, array) => { return (array.filter(e => e.id === id).length > 0) ? true : false };
const productsEjemplo = require('./../../../data/products')


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
            const product = await Product.findById(id);
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


    async batchScript() {

        // Desafio 9

        try {
            // Inserto los productos
            const result = await Product.insertMany(productsEjemplo);
            console.log("--> Productos insertados! <---");

            // Leeo los productos
            const all = await Product.find();
            console.log("--> Listado de Productos! <---");
            console.log(all);

            // Cuento los productos
            console.log("--> Conteo de Productos! <---");
            const quantity = await Product.count();
            console.log(quantity);

            // Consultas puntuales:
            // Todos los menores a menor a 1000 pesos.
            console.log("--> Menores a 1000 pesos! <---");
            const minors = await Product.find({ "price": { $lt: 1000 } });
            console.log(minors);

            // Todos entre los 1000 a 3000 pesos.
            console.log("--> Entre 1000 pesos Y 3000 pesos <---");
            const beetween = await Product.find({
                $and: [
                    { "price": { $gt: 1000 } },
                    { "price": { $lt: 3000 } }
                ]
            });
            console.log(beetween);

            // Todos entre los mayor a 3000 pesos..
            console.log("--> Mayores a 3000 pesos! <---");
            const mayors = await Product.find({ "price": { $gt: 3000 } });
            console.log(mayors);

            // sólo el titulo del tercer producto más barato.
            console.log("--> Titulo del tercer producto más barato! <---");
            const last = await Product.find({}, { "title": 1 }).limit(1).skip(3).sort({ price: -1 });
            console.log(last);



            return result;
        } catch (err) {
            console.log(`Producto no encontrado: ${err}`);
            return null;
        }

    }
}

module.exports = new Products();