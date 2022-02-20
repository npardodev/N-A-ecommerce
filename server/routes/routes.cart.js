


////////////////////////////////////////////////////////////////////////
////////////////////////// RUTAS CARRITO ///////////////////////////////
////////////////////////////////////////////////////////////////////////

//Crea carrito y devuelvo el id
routerShoppingCart.post('/', (req, res, next) => {
    res.send("Crea carrito y devuelvo el id");
})

// Lista de productos dentro del carrito
routerShoppingCart.get('/:id/productos', (req, res) => {
    res.send("Listado de productos en el carrito");
});

//Incorpora productos al carrito por su id
routerShoppingCart.post('/:id/productos', async(req, res, next) => {
    let product = req.body;
    try {
        let result = await container.save(product);
        res.json({ resultado: `Producto subido en forma correcta` });
    } catch {
        res.json({ resultado: `Error agregando producto` });
    }

})


//Eliminar un producto del carrito por su id de carrito y de producto
routerShoppingCart.delete('/:id/productos/:id_prod', async(req, res, next) => {
    res.send(`Eliminar un producto del carrito por su id de carrito y de producto`);
});

//modifica (esto no lo piden)
routerShoppingCart.put('/:id/productos', async(req, res, next) => {
    let { id } = req.params;
    let { newProduct } = req.body;
    let result = await container.modifyById(id, newProduct);
})

