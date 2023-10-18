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
    //  1º Que no esté vacío.
    //  2º Que sea un número.
    //  3º Que sea un número entero.
    //  4º Que esté comprendido entre 1 y 50.
    //  Si no hay errores se limpia el elemento small.

    validacion1(n1, smNum1);
    validacion2(text1, smText1);
    validacion3(n2, smNum2);
    validacion4(text2, smText2);



    // let arrayNumeros = [n1, n2, n3, n4, n5, n6];
    // let arrayComparados = [];
    // let smDupl = document.getElementById("smDuplicados");
    // let bool2 = true;

    // for (let i = 0; i < arrayNumeros.length; i++) {
    //     if (arrayComparados.includes(arrayNumeros[i])) {
    //         bool2 = false;
    //     } else {
    //         arrayComparados.push(arrayNumeros[i]);
    //     }
    // }

    // if (bool2) {
    //     smDupl.innerHTML = "";
    // } else {
    //     bool = false;
    //     smDupl.innerHTML = "** ERROR NÚMEROS DUPLICADOS";
    // }

    return bool;

}

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
    } else if (num < 1 || num > 100) {
        sm.innerHTML = "* Número fuera del rango (0-100).";
        bool = false;
    } else {
        sm.innerHTML = "";
    }
}

function validacion2(text, sm) {
    console.log("Texto 1: " + text + " Longitud: " + text.length);
    let cadena = String(text);
    let LongitudCad = cadena.length;
    if (text == "") {
        sm.innerHTML = "* Campo obligatorio.";
        bool = false;
    } else if (!isNaN(text)) {
        sm.innerHTML = "* Introduce un texto.";
        bool = false;
    } else if (Number.isInteger(Number(text))) {
        sm.innerHTML = "* Introduce un texto.";
        bool = false;
    } else if (LongitudCad < 3 || LongitudCad > 15) {
        sm.innerHTML = "* Mínimo 3 caracteres y máximo 15 caracteres.";
        bool = false;
    } else {
        sm.innerHTML = "";
    }
}

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
    } else if (num < -11 || num > 11) {
        sm.innerHTML = "* Número comprendido entre -10 y +10.";
        bool = false;
    } else {
        sm.innerHTML = "";
    }
}

function validacion4(text, sm) {
    console.log("Texto 2: " + text);
    if (text == "") {
        sm.innerHTML = "* Campo obligatorio.";
        bool = false;
    } else if (!isNaN(text)) {
        sm.innerHTML = "* Introduce un texto.";
        bool = false;
    } else if (Number.isInteger(Number(text))) {
        sm.innerHTML = "* Introduce un texto.";
        bool = false;
    } else if (indexOf('a', 0) == -1 && indexOf('e', 0) == -1 && indexOf('o', 0) == -1) {
        sm.innerHTML = "* Tiene que aparecer obligatoriamente las letras a , e , o en cualquier posición.";
        bool = false;
    } else {
        sm.innerHTML = "";
    }
}


