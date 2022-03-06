const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { config } = require('./config/config.js');

mongoose.connect(config.DB_URL, config.DB_OPTIONS)
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Mongodb Connection Error:' + config.DB_URL));
db.once('open', () => {
    console.log('Mongodb Connection Successful');
});

module.exports = { db };