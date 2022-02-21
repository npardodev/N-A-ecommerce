const mongoose = require('mongoose');
const config = require('./config');


mongoose.connect(config.DB_URL)
    .then(db => {
        console.log(`Database connection Ok!`);
    })
    .catch(err => console.error(err));

module.exports = { mongoose };