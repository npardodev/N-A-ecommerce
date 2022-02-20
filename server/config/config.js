require("dotenv").config();

let config = {
    port: process.env.PORT | 8080,
    url: 'http://localhost',
    DB_NAME: 'localdb',
    DB_USER: 'proximamente',
    DB_PASS: 'proximamente',
    AUTH_TOKEN: 'proximamente!',
}

module.exports = { config };