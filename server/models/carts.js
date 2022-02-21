const mongoose = require('mongoose');
const { Schema } = mongoose;

const CartSchema = new Schema({
    id: { type: Number, required: true },
    timestamp: { type: Date, required: true },
    products: { type: Array, required: true }
});


module.exports = mongoose.model('Cart', CartSchema);