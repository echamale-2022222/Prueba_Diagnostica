async function enviarDatos() {
    const nombre = document.getElementById('nombre').value;

    try {
        const resultado = await enviarDatosAlServidor(nombre);
        mostrarMensajeBienvenida(resultado);
    } catch (mensaje) {
        mostrarMensajeError(mensaje);
    }
}

function enviarDatosAlServidor(nombre) {
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            const autorizado = (nombre.toLowerCase() == 'braulio');
            if (autorizado) {
                resolve('Bienvenido al Sistema');
            } else {
                reject('Usted no esta autorizado');
            }        
        }, 2000);
    });
}

function mostrarMensajeBienvenida(mensaje) {
    const elemento = document.getElementById('mensaje');
    elemento.textContent = mensaje;
    elemento.classList.remove('oculto');
}

function mostrarMensajeError(mensaje) {
    const elemento = document.getElementById('mensaje');
    elemento.textContent = mensaje;
    elemento.classList.remove('oculto');
}