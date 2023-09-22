window.addEventListener("load", inicio);

// Identificar elementos html
let btnJugar = document.getElementById("jugar");
btnJugar.onclick = empezar;
let contenedorPrincipal = document.getElementById("contenedorP");

//let spTiempo = document.getElementById("spTiempo");
let spPuntos = document.getElementById("sppuntos");
let tiempo = 0;
let puntos = 0;
let contadorSegundos = 30;

// Declarar vectores
const colores = ["#FF0000", "#0000FF", "#00FF00", "#FFFF00"];
const nombres = ["Red", "Blue", "Green", "Yellow"];

function inicio() {
    console.log("entro en js");

    let campo = document.createElement("fieldset");
    // incorpora el nuevo componente creado
    // el estilo de clase .container que está en el css
    campo.className = "container";

    let leyenda = document.createElement("legend");
    leyenda.textContent = "Juegos 21 S";
    campo.appendChild(leyenda);


    // contenedor de los 15 botones de juego
    let contenedorFlex = document.createElement("div");
    contenedorFlex.className = "gallery";

    //crear los 15 botones 
    for (let i = 0; i < 15; ++i) {
        let divs = document.createElement("div");
        divs.className = "fondo";
        divs.setAttribute("Name", "cajasJuego");
        contenedorFlex.appendChild(divs);

    }
    campo.appendChild(contenedorFlex);
    //añadir campo al contenedor principal
    contenedorPrincipal.appendChild(campo);

}

function empezar() {
    console.log("Entro en jugar");
    contadorSegundos = 10;
    puntos = 0;
    tiempo = 0;
    btnJugar.disabled = true;
    cargarInfo();
    coloresJuego();

    //temporizador
    tiempo = setInterval(accion, 1000);

    function accion() {
        if (contadorSegundos > 0) {
            if (contadorSegundos % 5 == 0) {
                coloresJuego();
            }
            contadorSegundos--;
            cargarInfo();
        } else {
            limpiarDivs();
            alert("Fin juego");
            clearInterval(tiempo);
            btnJugar.disabled = false;

        }
    }
}


function cargarInfo() {
    spPuntos.textContent = "Puntos: " + puntos + " ------ Tiempo: " + contadorSegundos;
}

function limpiarDivs() {
    let arrayCajasJuego = document.getElementsByName("cajasJuego");
    arrayCajasJuego.forEach(function (item, posicion) {
        item.onclick = function () { };

        item.style.backgroundColor = "White";
        item.textContent = "";

    });
}

function coloresJuego() {
    let arrayCajasJuego = document.getElementsByName("cajasJuego");
    // foreach

    arrayCajasJuego.forEach(function (item, posicion) {
        let numColorFondo = Math.floor(Math.random() * colores.length);
        let numTexto = Math.floor(Math.random() * nombres.length);

        item.style.backgroundColor = colores[numColorFondo];
        item.textContent = nombres[numTexto];
        item.onclick = comprobar;

        function comprobar() {
            if (numColorFondo == numTexto) {
                puntos++;
                item.disabled = true;
            } else {
                if (puntos > 0) {
                    puntos--;
                }

            }
            cargarInfo();
        }

    });
}