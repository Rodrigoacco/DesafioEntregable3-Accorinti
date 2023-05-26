const productManager = require('./productManager');

const manager = new productManager();

async function crearYConsultarProductos() {
    const nuevoUsuario = {
        title: "producto prueba",
        description: "Este es un producto prueba",
        price: 200,
        thumbnail: "Sin imagen",
        code: "abc123",
        stock: 25,
    };
    await manager.CrearUsuario(nuevoUsuario);

    const usuarios = await manager.ConsultarProductos();
    console.log(usuarios);
}

crearYConsultarProductos()