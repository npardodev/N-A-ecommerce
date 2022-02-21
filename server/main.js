const express = require('express');
const path = require('path');
const helmet = require('helmet');
const Joi = require('joi');
const multer = require('multer');
const cors = require('cors');
const morgan = require('morgan');
const { Router } = express;
const { config } = require('./config/config.js');
const Debug = require('./utils/debug/debug.js');
const logger = require('./utils/logs/logs.js');

const log = logger;
const db = new Debug();

//Config multer
let storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now());
    },
})

let upload = multer({ storage: storage });
const app = express();

//settings
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + 'public'));
app.use('/css', express.static('public/css'));
app.use(morgan('dev'));
app.use(cors());

//React
app.use(express.static(path.resolve(__dirname, '../client/build')));

//Seguridad
app.disable('x-powered-by');

//SOA
let serverRoutes = require('./routes');
serverRoutes(app);

//Redirect path inválido
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/NotFound.html');
});

//server
const server = app.listen(config.port, () => {
    db.info(`Servidor corriendo en el puerto ${config.port}`);
    log.info(`Servidor corriendo en el puerto ${config.port}`);
})

server.on('error', (error) => {
    log.error(`Error ejecutando el servidor, ${config.error}`);
});