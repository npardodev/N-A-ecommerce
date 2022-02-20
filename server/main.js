const express = require('express');

const multer = require('multer');
const helmet = require('helmet');
const Joi = require('joi');
const cors = require('cors');

const { Router } = express;
const Container = require('./Contenedor.js');

const Debug = require('./utils/debug/debug.js');
const logger = require('./utils/logs/logs.js');

const morgan = require('morgan');
const path = require('path');

const { config } = require('./config/config.js');

const myRouter = new Router();

/* 
Crear una variable booleana administrador, cuyo valor configuraremos 
más adelante con el sistema de login. Según su valor (true ó false) me 
permitirá alcanzar o no las rutas indicadas. En el caso de recibir un request 
a una ruta no permitida por el perfil, devolver un objeto de error. Ejemplo: 
{ error : -1, descripcion: ruta 'x' método 'y' no autorizada}

- Un producto dispondrá de los siguientes campos:  
id, timestamp, nombre, descripcion, código, foto (url), precio, stock.

- El carrito de compras tendrá la siguiente estructura: 
id, timestamp(carrito), producto: { id, timestamp(producto), nombre, descripcion, código, foto (url), precio, stock }

enum CurrencyTypes { EUR, USD, ARS };

interface product = {
    id: number;
    timestamp: number;
    name: string;
    description: string;
    code: string;
    image: string;
    price: string;
    currency: string;
    stock: number
}
*/







/////
const log = logger;
const db = new Debug();
const container = new Container('./data/productos.txt');

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

//react
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

//Inicia server
const server = app.listen(config.port, () => {
    db.info(`Servidor corriendo en el puerto ${config.port}`);
    log.info(`Servidor corriendo en el puerto ${config.port}`);
})

server.on('error', (error) => {
    log.error(`Error ejecutando el servidor, ${config.error}`);
});