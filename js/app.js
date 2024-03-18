let numeroSecreto = 0;
let intentos = 0;
let listaNumeroSorteado = [];
let numeroMaximo = 10;
//Asignamos un número secreto al azar entre 1 y 20.
// funcion generica  encapsulando datos y  usando elemento y texto se ordena
// y se ahorra codigo

function asignarTextoElemnto(elemento,texto) {
    let elementoHTML= document.querySelector(elemento); //objeto que tiene unos metodos para trabajarlo
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemnto('p', `Adivinaste el numero el numero secreto en ${intentos} ${(intentos === 1 ? 'intento!' : 'intentos!')} ` );
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no aserto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemnto('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemnto('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
    // Si el numero generado esta incluido en la lista 
    // se genera una condicion  y si no otra

    //si ya sorteamos todos los numero gener un mensajes y cerrar el juego 

    if (listaNumeroSorteado.length == numeroMaximo) {
        asignarTextoElemnto('p', 'Ya se sortearon todos los números posibles')
    } else{
        if (listaNumeroSorteado.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function condionesIniciales() {
    asignarTextoElemnto('h1',"Juego del numero Secreto");
    asignarTextoElemnto('p',`Indica un numero entre el 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    return;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numero
    //generar numero aleatorio
    //inicializar el numero de intentos
    condionesIniciales();
    //deshabilitar el boton de nuevo juego.
    document.querySelector('#reiniciar').setAttribute("disabled", "true");
    return;
}

condionesIniciales();
 

