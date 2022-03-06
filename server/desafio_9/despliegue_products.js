const createProductsDB = async(db) => {

    // Crea coleccion
    db.createCollection("products");
}

module.exports = { createProductsDB };