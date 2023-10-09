window.onload = inicio;

let btnAvanzar1 = document.getElementById("avan1");
btnAvanzar1.onclick = avanzar1;
let btnAvanzar2 = document.getElementById("avan2");
btnAvanzar2.onclick = avanzar2;

const NUM_CAJAS = 40;
const componentes = [];

let cuerpo = document.querySelector("body");
let contenedorPrincipal = document.createElement("div");
contenedorPrincipal.className = "container";
let contenedorS = document.createElement("div");
contenedorS.className = "gallery";

contenedorPrincipal.appendChild(contenedorS);
cuerpo.appendChild(contenedorPrincipal);

function inicio() {
    console.log("Bienvenido a la función inicio");

    for (let i = 0; i < NUM_CAJAS; i++) {
        let caja = document.createElement("div");
        caja.className = "fondo"
        contenedorS.appendChild(caja);
        caja.style.backgroundColor = "green";
        componentes.push(caja);

    }

}

let tiempo1;

let tiempo2;

function avanzar1() {

    console.log("avanzar1");

    clearInterval(tiempo2);
    reiniciar;

    let contador = 0;

    let tiempo = setInterval(cambioRojo, 500);

    function cambioRojo() {

        if (contador <= componentes.length) {
            componentes[contador].style.backgroundColor = "red";
            contador++;
        }

        // console.log("rojo");
        // componentes.forEach(accion);

        // function accion(item, indice) {
        //     // console.log(item);
        //     item.style.backgroundColor = "red";
        // }

        // for (const iterator of componentes) {
        //     console.log("bucle");
        //     iterator.style.backgroundColor = "red";
        // }

    }
}

function avanzar2() {

    console.log("avanzar2");

    clearInterval(tiempo1);
    reiniciar;

    let contador = 0;

    let tiempo = setInterval(cambioVerde, 500);

    function cambioVerde() {

        if (contador < componentes.length) {
            componentes[contador].style.backgroundColor = "red";
            if (contador > 0) {
                componentes[contador - 1].style.backgroundColor = "green";
            }
            contador++;
        } else {
            componentes[contador - 1].style.backgroundColor = "green";
            componentes[0].style.backgroundColor = "red";
            contador = 0;
        }
    }
}

function reiniciar() {
    componentes.forEach(accion);

    function accion(item, indice) {
        // console.log(item);
        item.style.backgroundColor = "green";
    }
}

