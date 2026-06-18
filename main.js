const productos = [
    { id: 1, nombre: "Manzanas", precio: 2.50, categoria: "Frutas" },
    { id: 2, nombre: "Leche", precio: 3.20, categoria: "Lácteos" },
    { id: 3, nombre: "Pan", precio: 1.80, categoria: "Panadería" },
    { id: 4, nombre: "Queso", precio: 5.00, categoria: "Lácteos" },
    { id: 5, nombre: "Tomates", precio: 2.00, categoria: "Verduras" },
    { id: 6, nombre: "Huevos", precio: 4.50, categoria: "Lácteos" },
    { id: 7, nombre: "Arroz", precio: 3.00, categoria: "Granos" },
    { id: 8, nombre: "Aceite", precio: 6.00, categoria: "Aceites" }
];

let carrito = [];


function mostrarProductos() {

    let lista = document.getElementById("productosLista");

    lista.innerHTML = "";

    for (let i = 0; i < productos.length; i++) {

        let producto = productos[i];

        let div = document.createElement("div");

        div.classList.add("producto-card");

        div.innerHTML =
            "<h3>" + producto.nombre + "</h3>" +
            "<p>Categoría: " + producto.categoria + "</p>" +
            "<p>Precio: $" + producto.precio.toFixed(2) + "</p>" +
            "<button onclick='agregarAlCarrito(" + producto.id + ")'>Agregar</button>";

        lista.appendChild(div);
    }
}


function agregarAlCarrito(idProducto) {

    let encontrado = false;

    for (let i = 0; i < carrito.length; i++) {

        if (carrito[i].id == idProducto) {
            carrito[i].cantidad++;
            encontrado = true;
        }
    }

    if (encontrado == false) {

        for (let i = 0; i < productos.length; i++) {

            if (productos[i].id == idProducto) {

                carrito.push({
                    id: productos[i].id,
                    nombre: productos[i].nombre,
                    precio: productos[i].precio,
                    cantidad: 1
                });
            }
        }
    }

    actualizarCarrito();
}


function actualizarCarrito() {

    let lista = document.getElementById("carritoLista");

    lista.innerHTML = "";

    if (carrito.length == 0) {

        lista.innerHTML = "<p>El carrito está vacío</p>";

        document.getElementById("totalPrecio").innerHTML = "0.00";
        document.getElementById("totalCantidad").innerHTML = "0";

        return;
    }

    for (let i = 0; i < carrito.length; i++) {

        let item = carrito[i];

        let subtotal = item.precio * item.cantidad;

        let div = document.createElement("div");

        div.classList.add("carrito-item");

        div.innerHTML =
            "<strong>" + item.nombre + "</strong><br>" +
            "Precio: $" + item.precio.toFixed(2) + "<br>" +
            "Cantidad: " + item.cantidad + "<br>" +
            "<button onclick='eliminarDelCarrito(" + item.id + ")'>Eliminar</button>";

        lista.appendChild(div);
    }

    calcularTotales();
}


function calcularTotales() {

    let totalPrecio = 0;
    let totalCantidad = 0;

    for (let i = 0; i < carrito.length; i++) {

        totalPrecio = totalPrecio + (carrito[i].precio * carrito[i].cantidad);

        totalCantidad = totalCantidad + carrito[i].cantidad;
    }

    document.getElementById("totalPrecio").innerHTML = totalPrecio.toFixed(2);

    document.getElementById("totalCantidad").innerHTML = totalCantidad;
}


function eliminarDelCarrito(idProducto) {

    let nuevoCarrito = [];

    for (let i = 0; i < carrito.length; i++) {

        if (carrito[i].id != idProducto) {
            nuevoCarrito.push(carrito[i]);
        }
    }

    carrito = nuevoCarrito;

    actualizarCarrito();
}


function limpiarCarrito() {

    carrito = [];

    actualizarCarrito();
}


window.onload = function () {

    mostrarProductos();

    actualizarCarrito();

    document.getElementById("limpiarCarrito").onclick = limpiarCarrito;
};