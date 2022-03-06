use products;
db.posts.find();
db.posts.insertOne({ title: 'Articulo 3' });


db.createCollection("products");

db.coll.stats();
db.coll.storageSize();
db.coll.totalSize();
db.coll.validate({ full: true });

// insert 
db.coll.insertOne({});
db.coll.insert([{}]);
db.coll.insert([{}]);

// find
db.coll.findeOne();
db.coll.find();
db.coll.find().pretty();
db.coll.find({})



// Crea coleccion
db.createCollection("products");



class Products {

    constructor() {
        this.;
    }

    async addProduct() {

    }

    async getProductsBy() {

    }

    async updateProducts() {

    }

    async deleteProduct() {

    }

    async showProducts() {

    }

}