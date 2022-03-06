const mongoose = require('mongoose');
const { Schema } = mongoose;

const MessagesSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String },
    timestamp: { type: Date, required: true },
    message: { type: String, required: true },
});
//Agregar validaciones a los campos!

const Message = mongoose.model('Message', MessagesSchema);

module.exports = Message;