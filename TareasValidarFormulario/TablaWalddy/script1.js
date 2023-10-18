let accion = document.getElementById("validar");

let bool = true;

accion.onsubmit = function () {

    bool = true;

    //Declaramos el valor que tenga el input y el small para el mensaje de error
    let n1 = document.getElementById("idNumero1").value;
    let smNum1 = document.getElementById("smNumero1");

    let text1 = document.getElementById("idTexto1").value;
    let smText1 = document.getElementById("smTexto1");

    let n2 = document.getElementById("idNumero2").value;
    let smNum2 = document.getElementById("smNumero2");

    let text2 = document.getElementById("idTexto2").value;
    let smText2 = document.getElementById("smTexto2");


    //Validamos:
    //  1º Que ningún campo esté vacío.
    //  2º Que los campos numero1 y numero 2 sean un número.
    //  3º Que los campos numero1 y numero 2 sean un número entero.
    //  4º Que el campo texto1 esté comprendido entre 5 y 15 caracteres. Y que al menos una letra mayúscula y un número.
    //  5º Que el campo texto2 esté comprendido entre 20 y 30 caracteres. Tiene que contener una sola arroba.
    //  6º Que el campo numero1 esté comprendido entero entre 1 y 10
    //  7º Que el campo numero2 sea múltiplo de 5
    //  8º Si no hay errores se limpia el elemento small.

    validacion1(n1, smNum1);
    validacion2(text1, smText1);
    validacion3(n2, smNum2);
    validacion4(text2, smText2);


    return bool;

}

//Función para validar el campo numero 1
function validacion1(num, sm) {
    console.log("Num 1: " + num);

    if (num == "") {
        sm.innerHTML = "* Campo obligatorio.";
        bool = false;
    } else if (isNaN(num)) {
        sm.innerHTML = "* Introduce un número.";
        bool = false;
    } else if (!Number.isInteger(Number(num))) {
        sm.innerHTML = "* Introduce un número entero.";
        bool = false;
    } else if (num <= 0 || num >= 11) {
        sm.innerHTML = "* Número fuera del rango (1-10).";
        bool = false;
    } else {
        sm.innerHTML = "";
    }
}

//Función para validar el campo texto 1
function validacion2(text, sm) {
    console.log("Texto 1: " + text + " Longitud: " + text.length);

    if (text == "") {
        sm.innerHTML = "* Campo obligatorio.";
        bool = false;
    } else if (text.length < 5 || text.length > 15) {
        sm.innerHTML = "* La longitud debe estar entre 5 y 15 caracteres.";
        bool = false;
    } else if (!/[A-Z]/.test(text) || !/\d/.test(text)) {
        sm.innerHTML = "* Debe contener al menos una letra mayúscula y un número.";
        bool = false;
    } else {
        sm.innerHTML = "";
    }
}

//Función para validar el campo numero 2
function validacion3(num, sm) {
    console.log("Num 2: " + num);
    if (num == "") {
        sm.innerHTML = "* Campo obligatorio.";
        bool = false;
    } else if (isNaN(num)) {
        sm.innerHTML = "* Introduce un número.";
        bool = false;
    } else if (!Number.isInteger(Number(num))) {
        sm.innerHTML = "* Introduce un número entero.";
        bool = false;
    } else if (num % 5 != 0) {
        sm.innerHTML = "* Número múltiplo de 5.";
        bool = false;
    } else {
        sm.innerHTML = "";
    }
}

//Función para validar el campo texto 2
function validacion4(text, sm) {
    console.log("Texto 2: " + text);

    if (text == "") {
        sm.innerHTML = "* Campo obligatorio.";
        bool = false;
    } else if (text.length < 20 || text.length > 30) {
        sm.innerHTML = "* La longitud debe estar entre 20 y 30 caracteres.";
        bool = false;
    } else if ((text.match(/@/g) || []).length !== 1) {
        sm.innerHTML = "* Debe contener una sola arroba ('@').";
        bool = false;
    } else {
        sm.innerHTML = "";
    }
}


