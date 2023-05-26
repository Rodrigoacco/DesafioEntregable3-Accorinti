const fs = require('fs');

class productManager {
    async CrearProducto(producto) {
        const contenido = await fs.promises.readFile('./products.json', 'utf-8')
            //.catch((error) => console.log(error));

        const product = JSON.parse(contenido);
        product.push(producto);

        await fs.promises.writeFile('./products.json', JSON.stringify(producto))
           // .catch((error) => console.log(error));
    }

    async ConsultarProducto() {
        const contenido = await fs.promises.readFile('./products.json', 'utf-8')
           // .catch((error) => console.log(error));

        const product = JSON.parse(contenido);
        return product;
    }
}

module.exports = productManager;