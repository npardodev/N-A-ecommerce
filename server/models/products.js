const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    timestamp: { type: Date, required: true },
    code: { type: String, required: true },
    img: { type: String, required: true },
    stock: { type: Number, required: true }
});
//Agregar validaciones a los campos!

const Products = mongoose.model('Product', ProductSchema);

module.exports = Products;