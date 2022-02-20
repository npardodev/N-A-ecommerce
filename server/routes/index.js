//importo componentes

/*
let apiProductos = require('..components/productos');
let apiAuth = require('..components/auth');
let apiCarrito = require('..components/carrito');
*/

let apiProducts = require('../components/products');
let apiShopCart = require('../components/cart');

module.exports = app => {

    //apiCarrito(app);
    //apiAuth(app);

    apiProducts(app);
    apiShopCart(app);
}

/*

 Idea de lo de fatz 

const express = require('express');
const router = express.Router();

//Mi modelo para consultar a la BD
const Task = require('../models/task');

router.get('/', async(req, res) => {
    const tasks = await Task.find();

    res.json({
        status: 'API funcionando',
        tareas: tasks,
    })
})

router.get('/:id', async(req, res) => {
    const task = await Task.findById(req.params.id);

    res.json({
        status: 'Tarea encontrada',
        tareas: task,
    })
})


router.post('/', async(req, res) => {
    console.log(req.body);
    const { title, description } = req.body;
    const task = new Task({ title, description });
    await task.save();

    res.json({
        status: 'Tarea guardada',
        agregado: task,
    })
});


router.put('/:id', async(req, res) => {
    const { title, description } = req.body;
    const newTask = ({ title, description });
    const id = req.params.id;

    await Task.findByIdAndUpdate(id, newTask);

    res.json({
        status: 'Tarea actualizada',
    })
})


router.delete('/:id', async(req, res) => {
    const id = req.params.id;
    await Task.findByIdAndRemove(id);

    res.json({
        status: 'Tarea eliminada',
    })
})
module.exports = router;

*/