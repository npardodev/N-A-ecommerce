const Carts = require('../../../models/carts');
const fs = require('fs').promises;
const checkInArray = (id, array) => { return (array.filter(e => e.id === id).length > 0) ? true : false };

class Cart {

    constructor(path) {
        this.id = "";
        this.user = "";
        this.items = [];
        this.path = path;
    }

    async cartCreate(path) {
        try {
            let nuevoCarrito = new Cart();
            const cart = await Carts.create(nuevoCarrito);
            console.log(`Carrito creado en forma exitosa`);
            return cart.id;

        } catch (error) {
            console.log(`Falla en creacion del carrito: ${err}`);
            return null;
        }
    }

    async cartGetInfo(id) {
        try {
            const cart = await Carts.findById(id);
            return cart;

        } catch (error) {
            console.log(`Carrito no encontrado: ${err}`);
            return null;
        }
    }

    async cartDelete(id) {
        try {
            await Carts.deleteOne({ _id: id });
            return 0;
        } catch (error) {
            console.log(`Carrito no encontrado: ${err}`);
            return null;
        }
    }


    async getProducts(id) {
        try {
            const Cart = await Carts.findById(id);
            return Cart.items;

        } catch (error) {
            console.log(`Carrito no encontrado: ${err}`);
            return null;
        }
    }

    async addProduct(id, newProduct) {
        try {
            const Cart = await Carts.findById(id);
            Cart.items.push(newProduct);
            return 0;

        } catch (error) {
            console.log(`Carrito no encontrado: ${err}`);
            return null;
        }
    }

    async deleteProduct(idCart, idProd) {
        try {
            const Cart = await Carts.findById(id);
            Cart.items = Cart.items.filter(item => item.id !== idProd);
            //ver si hace falta hacer un .save()?
            return 0;

        } catch (error) {
            console.log(`Carrito no encontrado: ${err}`);
            return null;
        }
    }

    verifyItemExists(id) {
        return checkInArray(id, this.items);
    }

    addItem(cartItem) {

        const isInCar = this.verifyItemExists(id, this.items);

        if (isInCar) {
            return cartItem.updateQuantity(cartItem.quantity);
        } else {
            this.cartItems.push(cartItem);
        }
    }

    removeItemById(id) {
        this.cartItems = [...this.items].filter(item => item.id != id)
    }

    showCartItems() {
        console.log(this.items);
    }





    async save(obj) {
        try {
            let actualProducts = await this.getAll();
            if (actualProducts.length === 0)
                actualProducts = [];
            this.count++;
            let data = {
                ...obj,
                id: this.count
            };
            actualProducts.push(data);
            let modifyProducts = JSON.stringify(actualProducts, null, 2);
            await fs.writeFile(`${this.path}`, modifyProducts);
            this.count++;
            console.log(`Objeto agregado correctamente`);

        } catch (err) {
            console.log(`Falla en guardado de producto, ${err}`);
            return err;
        }
    }

    async getById(id) {
        const data = await fs.readFile(`${this.path}`, 'utf-8')
            .catch((err) => console.error('Falla en lectura de archivo', err));

        let array = JSON.parse(data);
        const element = array.filter(item => item.id === id);
        return element ? JSON.stringify(element[0]) : null;
    }


    async getAll() {
        const data = await fs.readFile(`${this.path}`, 'utf-8')
            .catch((err) => console.error(`Falla en lectura de archivo, ${err}`));
        const products = JSON.parse(data);
        this.count = (products.length); //actualizo el count
        return products;
    }

    async deleteById(id) {
        const data = await this.getAll();
        id = Number(id);
        console.log(data);
        if (checkInArray(id, data)) {
            console.log("entre");
            const productsFiltered = data.filter((prd) => prd.id !== (id));
            await fs.writeFile(this.file, JSON.stringify(productsFiltered, null, 2));
            return console.log(`El producto ${id} fue eliminado correctamente`);
        }

        return console.log(`El producto ${id} no se pudo encontrar. Ingrese un nuevo ID`);
    }

    async modifyById(id, newProduct) {
        const data = await this.getAll();
    }

    async deleteAll() {
        try {
            await fs.writeFile(`${this.path}`, '[]');
            console.log(`Vaciado de archivo exitoso`);
            return;
        } catch (err) {
            console.log(`Falla en el vaciado del archivo, ${err}`);
        }
    }

    async deleteFile() {

        try {
            await fs.unlink(`${this.path}`);

        } catch (err) {
            console.log(`Falla en borrado de archivo, ${err}`);
        }
    }
}

module.exports = new Cart();