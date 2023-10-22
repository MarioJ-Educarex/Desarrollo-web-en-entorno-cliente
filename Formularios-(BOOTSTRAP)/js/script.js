window.addEventListener("load", inicio);

function inicio() {
    console.log("entro en inicio");

    let confirmar = document.getElementById("validar");
    confirmar.onsubmit = function () {
        console.log("Entro en la validación número: contenido, entero, no esté repetido");
        alert("CORFIRMAR");

        let numero1 = document.getElementById("idNumero1");
        let mensaje1 = document.getElementById("smNumero1");
        let numero2 = document.getElementById("idNumero2");
        let mensaje2 = document.getElementById("smNumero2");
        let numero3 = document.getElementById("idNumero3");
        let mensaje3 = document.getElementById("smNumero3");
        let numero4 = document.getElementById("idNumero4");
        let mensaje4 = document.getElementById("smNumero4");
        let numero5 = document.getElementById("idNumero5");
        let mensaje5 = document.getElementById("smNumero5");
        let numero6 = document.getElementById("idNumero6");
        let mensaje6 = document.getElementById("smNumero6");
        let infoRepetido = document.getElementById("smRepetido");
        let arrayComparacion = [];
        let bool_repetido = false;
        let arrayNumeros = [numero1, numero2, numero3, numero4, numero5, numero6];

        for (let i = 0; i < arrayNumeros.length; i++) {
            for (let j = 0; j < arrayNumeros.length; j++) {
                if (arrayNumeros[i] == arrayNumeros[j] && i != j) {
                    bool_repetido = true;
                }
            }

        }

        if (bool_repetido) {
            infoRepetido.innerHTML = "** error, número repetido";
        }

        validar(numero1, mensaje1);
        validar(numero2, mensaje2);
        validar(numero3, mensaje3);
        validar(numero4, mensaje4);
        validar(numero5, mensaje5);
        validar(numero6, mensaje6);

        function validar(numero, mensaje) {

        }
    }
}