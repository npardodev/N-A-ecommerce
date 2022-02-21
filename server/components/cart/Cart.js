const fs = require('fs').promises;

const checkInArray = (id, array) => { return (array.filter(e => e.id === id).length > 0) ? true : false };

class CartItem {
    constructor(title, price, quantity) {
        this.title = title;
        this.price = price;
        this.quantity = quantity;
        this.updateId.bind(this);
        this.updateQuantity.bind(this)
    }

    updateId(id) {
        // Obtener id
    }

    updateQuantity(quantity) {
        this.quantity += quantity;
    }
}

class Cart {

    constructor() {
        this.id = id;
        this.items = [];
        this.user = user;
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


    async create(path) {

        try {
            await fs.writeFile(`${path}`, "");
            console.log(`Archivo creado en forma exitosa`);

        } catch (error) {
            console.log(`Falla en creado de archivo ${err}`);
        }
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

module.exports = Cart;