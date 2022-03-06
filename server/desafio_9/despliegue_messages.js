const createMessagesDB = async(db) => {
    // Crea coleccion
    db.createCollection("messages");

}

module.exports = { createMessagesDB };