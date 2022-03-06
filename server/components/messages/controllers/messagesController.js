const messagesService = require("../services/messagesServices");

const GETmessages = async(req, res, next) => {
    console.log("GET messages!");

    let response = await messagesService.getMessages();
    res.json({
        status: `Ok`,
        result: `Mensajes: ${response} `
    });
}

const POSTmessages = async(req, res, next) => {
    console.log("POST messages!");
    let msg = req.body;
    let result = await messagesService.postMessages(msg);
    res.json({
        status: `Ok`,
        result: `Mensaje agregado: ${result} `
    });
}


const BATCHMessages = async(req, res, next) => {
    console.log("Ejecutando Desafio 9 !");

    let result = await messagesService.batchScript();
}


module.exports = {
    GETmessages,
    POSTmessages,
    BATCHMessages
};