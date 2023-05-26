const express = require('express');
const app = express();
const fs = require('fs');


app.get('/products', (req, res) => {
    fs.readFile('products.json', 'utf8', (error, data) => {
        if (error) {
            console.error('Error al leer el archivo:', error);
            return;
        }

        try {
            const productos = JSON.parse(data);
            // Obtén el valor del parámetro de consulta 'limit'
            const limit = req.query.limit;
            if (limit) {
            // Si se proporciona el parámetro 'limit', devuelve solo el número solicitado de productos
                const limitedProductos = productos.slice(0, limit);
                res.json(limitedProductos);
            } else {
            // Si no se proporciona el parámetro 'limit', devuelve todos los productos
            res.json(productos);
            }
        } catch (error) {
        console.error('Error al analizar el archivo JSON:', error);
        }
    });
});

app.get('/products/:pid', (req, res) => {
    const productId = req.params.pid;

    fs.readFile('products.json', 'utf8', (error, data) => {
        if (error) {
            console.error('Error al leer el archivo:', error);
            return;
        }

        try {
            const productos = JSON.parse(data);
            // Busca el producto con el ID solicitado
            const producto = productos.find(producto => producto.id === productId);
            if (!producto) {
                return res.status(404).send('Producto no encontrado');
            }
            res.send(producto);
        } catch (error) {
        console.error('Error al analizar el archivo JSON:', error);
        }
    });
});

// Iniciar el servidor en el puerto 8080
app.listen(8080, () => {
    console.log('Servidor en el puerto 8080');
});
