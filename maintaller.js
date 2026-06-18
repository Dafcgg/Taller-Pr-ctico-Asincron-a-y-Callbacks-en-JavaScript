
//PARTE 1. CALLBACKS BÁSICOS


function realizarOperacion(num1, num2, operacionCallback) {
    console.log(`Operación con: ${num1} y ${num2}`);
    operacionCallback(num1, num2);
}

function sumar(a, b) {
    console.log(`Resultado Suma: ${a + b}`);
}

function restar(a, b) {
    console.log(`Resultado Resta: ${a - b}`);
}

function multiplicar(a, b) {
    console.log(`Resultado Multiplicación: ${a * b}`);
}

realizarOperacion(10, 5, sumar);
realizarOperacion(10, 5, restar);
realizarOperacion(10, 5, multiplicar);



//PARTE 2. COMPRENDIENDO LA ASINCRONÍA



function tareaNoBloqueante(callback) {
    console.log("Iniciando tarea no bloqueante...");

    setTimeout(function () {
        console.log("Tarea completada.");
        callback();
    }, 2000);
}

console.log("Inicio del programa.");

tareaNoBloqueante(function () {
    console.log("Continuando después de la tarea.");
});

console.log("Fin del programa.");



//PARTE 3. SIMULACIÓN DE PROCESOS REALES



function solicitarJSON(callback) {
    setTimeout(() => {
        console.log("Solicitud JSON completada.");
        callback();
    }, 3000);
}

function reproducirAudio(callback) {
    setTimeout(() => {
        console.log("Reproducción de audio terminada.");
        callback();
    }, 1000);
}

function leerSensor(callback) {
    setTimeout(() => {
        console.log("Lectura del sensor completada.");
        callback();
    }, 500);
}

console.log("--- Iniciando procesos asíncronos ---");

solicitarJSON(() => console.log("Archivo JSON recibido."));
reproducirAudio(() => console.log("Audio finalizado."));
leerSensor(() => console.log("Datos del sensor listos."));



//PARTE 4. DISEÑANDO TU PROPIA OPERACIÓN ASÍNCRONA


function simularDescarga(nombreArchivo, callback) {
    console.log(`Iniciando descarga de ${nombreArchivo}...`);

    setTimeout(() => {
        console.log(`La descarga de ${nombreArchivo} ha terminado.`);
        callback();
    }, 4000);
}

simularDescarga("manual.pdf", () => {
    console.log("Archivo listo para abrir.");
});



//PARTE 5. ANÁLISIS DEL CALLBACK HELL



function obtenerUsuario(callback) {
    setTimeout(() => {
        console.log("Usuario obtenido.");
        callback();
    }, 500);
}

function obtenerPedidos(callback) {
    setTimeout(() => {
        console.log("Pedidos obtenidos.");
        callback();
    }, 500);
}

function obtenerFactura(callback) {
    setTimeout(() => {
        console.log("Factura obtenida.");
        callback();
    }, 500);
}

function enviarCorreo(callback) {
    setTimeout(() => {
        console.log("Correo enviado.");
        callback();
    }, 500);
}

// Ejemplo de Callback Hell

obtenerUsuario(() => {
    obtenerPedidos(() => {
        obtenerFactura(() => {
            enviarCorreo(() => {
                console.log("Proceso finalizado");
            });
        });
    });
});