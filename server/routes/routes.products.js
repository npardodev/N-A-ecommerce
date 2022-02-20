
//importo componentes
//let apiAuth = require('..components/auth');
//let apiCarrito = require('..components/carrito');
//let apiArmandoPc = require('..components/armandopc');

module.exports = app => {

    apiCarrito(app);
    apiAuth(app );
  
}

////////////////////////////////////////////////////////////////////////
///////////////////////// RUTAS PRODUCTO //////////////////////////////
////////////////////////////////////////////////////////////////////////



// Lista de productos
routerProducts.get('/', (req, res) => {
    res.send("Hola desde producto");
});

//agrega
routerProducts.post('/', async(req, res, next) => {
    let product = req.body;
    try {
        let result = await container.save(product);
        res.json({ resultado: `Producto subido en forma correcta` });
    } catch {
        res.json({ resultado: `Error agregando producto` });
    }

})

//modifica
routerProducts.put('/:id', async(req, res, next) => {
    let { id } = req.params;
    let { newProduct } = req.body;
    let result = await container.modifyById(id, newProduct);
})

//delete
routerProducts.delete('/:id', async(req, res, next) => {
    let { id } = req.params;
    let result = await container.deleteById(id);
})

// Upload
routerProducts.post('/uploadProduct', upload.single('image'), (req, res, next) => {
    const file = req.file;
    const title = req.body.title;
    const price = req.body.price;

    if (!file) {
        const error = new Error('Por favor suba un archivo');
        error.httpStatusCode = 400;
        return next(error);
        res.json(`Error en la carga del productos`);

    } else {

        const newProduct = {
            title: title,
            price: price,
            thumbnail: `./uploads/${file.filename}`
        }
        container.save(newProduct);
        res.send(`Producto subido en forma correcta`);
    }

});