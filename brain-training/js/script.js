window.addEventListener("load", inicio);

// Vectores
const operadores = ["-", "+", "*", "/", "%"];

// Bontones
let bntStart = document.getElementById("comenzar");
let btnFin = document.getElementById("fin");
let btnComprobar = document.getElementById("comprobar");

// Labels
let lbNum1 = document.getElementById("num1");
let lbNum2 = document.getElementById("num2");
let lbOperator = document.getElementById("operador");
let lbPoints = document.getElementById("puntuacion");
let lbFallos = document.getElementById("fallos");

// Inputs
let resultado = document.getElementById("resultado");

// Variables

let puntos = 1;
let errores = 1;

function inicio() {
    bntStart.onclick = start;
    btnComprobar.disabled = true;
    btnFin.disabled = true;
    resultado.disabled = true;

}

function start() {
    bntStart.disabled = true;
    btnComprobar.disabled = false;
    btnFin.disabled = false;
    resultado.disabled = false;
    let num1 = Math.round(Math.random() * 100);
    let num2 = Math.round(Math.random() * 100);
    let op = Math.round(Math.random() * (operadores.length - 1));
    lbNum1.textContent = num1;
    lbOperator.textContent = operadores[op];
    lbNum2.textContent = num2;

    btnComprobar.onclick = comprobacion;
    btnFin.onclick = fin;

}

function fin() {
    bntStart.disabled = false;
    btnComprobar.disabled = true;
    btnFin.disabled = true;
    resultado.disabled = true;

    lbFallos.textContent = "Fallos: " + 0;
    lbPoints.textContent = "Puntuación: " + 0;

    puntos = 1;
    errores = 1;

    alert("Fin del juego");
}

function comprobacion() {
    // Obtener los valores actuales de los elementos en la página
    let num1 = parseInt(lbNum1.textContent);
    let num2 = parseInt(lbNum2.textContent);
    let operador = lbOperator.textContent;
    let respuestaUsuario = parseInt(resultado.value);

    // Realizar la operación matemática según el operador
    let resultadoCorrecto;
    switch (operador) {
        case "+":
            resultadoCorrecto = num1 + num2;
            break;
        case "-":
            resultadoCorrecto = num1 - num2;
            break;
        case "*":
            resultadoCorrecto = num1 * num2;
            break;
        case "/":
            if (num2 == 0) {
                alert("INDETERMINACIÓN AL INTENTAR DIVIDIR POR 0");
            } else {
                resultadoCorrecto = num1 / num2;
            }

            break;
        case "%":
            if (num2 == 0) {
                alert("INDETERMINACIÓN AL INTENTAR DIVIDIR POR 0");
            } else {
                resultadoCorrecto = num1 % num2;
            }

            break;
        default:
            resultadoCorrecto = 0; // Valor predeterminado si no se reconoce el operador
    }

    // Verificar si la respuesta del usuario es correcta
    if (respuestaUsuario == resultadoCorrecto) {
        // Respuesta correcta
        //lbPoints.textContent = "Puntuación: "+(parseInt(lbPoints.textContent) + 1);
        lbPoints.textContent = "Puntuación: " + (puntos++);
        alert("Respuesta correcta");
    } else {
        // Respuesta incorrecta
        // lbFallos.textContent = "Fallos: "+(parseInt(lbFallos.textContent) + 1);
        lbFallos.textContent = "Fallos: " + (errores++);
        alert("Respuesta incorrecta");
    }

    // Reiniciar la generación de números y habilitar el botón de inicio

    resultado.value = "0"; // Borrar la respuesta del usuario
    start(); // Generar una nueva pregunta
}