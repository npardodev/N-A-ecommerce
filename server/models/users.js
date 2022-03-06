const mongoose = require('mongoose');
const { Schema } = mongoose;

const UsersSchema = new Schema({
    name: { type: String, required: true },
    passw: { type: String, required: true },
    age: { type: Number },
});

const Users = mongoose.model('Users', UsersSchema);

module.exports = Users;