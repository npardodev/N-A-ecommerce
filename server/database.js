const mongoose = require('mongoose');
const config = require('./config');
const URI = 'mongodb+srv://npardodev:ruX66z44y1FM2lfA@cluster0.c4y0k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'; //Colocar url de mongo ATLAS


mongoose.connect(URI)
    .then(db => {
        console.log(`Database connection Ok!`);
    })
    .catch(err => console.error(err));

module.exports = { mongoose };