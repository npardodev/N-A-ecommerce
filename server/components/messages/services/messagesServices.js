const Messages = require('../../../models/messages');
const checkInArray = (id, array) => { return (array.filter(e => e.id === id).length > 0) ? true : false };

const messagesEjemplo = require('../../../data/messages')


class Message {

    async getMessages() {
        try {
            const result = await Messages.find();
            return result;
        } catch (err) {
            console.log(`Mensajes no encontrado: ${err}`);
            return null;
        }
    }

    async postMessages() {

    }

    async batchScript() {

        // Desafio 9
        try {
            // Inserto los Messages
            console.log("--> Inserto los Messages! <---");
            const result = await Messages.insertMany(messagesEjemplo);

            // Leeo los Messages
            console.log("--> Lectura de Messages! <---");
            const all = await Messages.find();
            console.log(all);

            // Cuento los Messages
            console.log("--> Conteo de Messages! <---");
            const quantity = await Messages.count();
            console.log(quantity);


            return result;
        } catch (err) {
            console.log(`Error ejecutando Script: ${err}`);
            return null;
        }

    }
}

module.exports = new Message();