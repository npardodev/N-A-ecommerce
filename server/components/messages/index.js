let express = require('express');
const messagesController = require('./controllers/messagesController.js');
const messagesRouterPath = '/api/messages';
const checkAuth = require('../../utils/middlewares/checkAuth.middleware');

const apiMessages = (app) => {
    let routerMessages = express.Router();
    app.use(messagesRouterPath, routerMessages);

    //Rutas
    routerMessages.get('/desafio9', checkAuth, messagesController.BATCHMessages);
    routerMessages.get('/', checkAuth, messagesController.GETmessages);
    routerMessages.post('/', checkAuth, messagesController.POSTmessages);

}

module.exports = apiMessages;