window.onload = inicio();

let bool = true;
function inicio() {
    console.log("Entro en inicio");

    let expediente = document.getElementById("expediente").value;
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let dwec = document.getElementById("dwec").value;
    let dwes = document.getElementById("dwes").value;
    let ds = document.getElementById("ds").value;
    let eie = document.getElementById("eie").value;
    let diw = document.getElementById("diw").value;

    let smExp = document.getElementById("smExpediente");
    let smNombre = document.getElementById("smNombre");
    let smApell = document.getElementById("smApellidos");
    let smDWEC = document.getElementById("smDWEC");
    let smDWES = document.getElementById("smDWES");
    let smDS = document.getElementById("smDS");
    let smEIE = document.getElementById("smEIE");
    let smDIW = document.getElementById("smDIW");


    let btnAceptar = document.getElementById("aceptar");
    // btnAceptar.onclick = recogerDatos;

    let accion = document.getElementById("cargar");

    accion.onsubmit = function () {


        if (expediente == "" || nombre == "" || apellidos == "" || dwec == "" || dwes == "" || ds == "" || eie == "" || diw == "") {
            bool = false;

            if (expediente == null) {
                smExp.innerHTML("*Campo obligatorio");
            }

            if (nombre == null) {
                smNombre.innerHTML("*Campo obligatorio");
            }

            if (apellidos == null) {
                smApell.innerHTML("*Campo obligatorio");
            }

            if (dwec == null) {
                smDWEC.innerHTML("*Campo obligatorio");
            }

            if (dwes == null) {
                smDWES.innerHTML("*Campo obligatorio");
            }

            if (ds == null) {
                smDS.innerHTML("*Campo obligatorio");
            }

            if (eie == null) {
                smEIE.innerHTML("*Campo obligatorio");
            }

            if (diw == null) {
                smDIW.innerHTML("*Campo obligatorio");
            }
        } else {
            console.log("entra en else");
            let cadena = String(expediente);
            if (cadena.length != 6) {
                bool = false;
                smExp.innerHTML = "* Cadena no puede superar los 6 caracteres";
            } else {
                for (let i; i < cadena.length - 1; i++) {
                    let caracter = cadena.charAt(i);
                    if (isNaN(caracter)) {
                        smExp.innerHTML = "* Los 5 primeros tienen que ser números"
                        bool = false;
                    }
                }
                let caracter = cadena.charAt(cadena.length - 1);
                if (!/[A-Z]/.test(caracter)) {
                    console.log(caracter);
                    smExp.innerHTML = "* Último carácter letra mayúscula";
                    bool = false;
                }
                if (dwec < 1 || dwec > 10) {
                    bool = false;
                    smDWEC.innerHTML = "* No cumple con el rango";
                }
            }
        }
        return bool;
    }
}

// function recogerDatos() {

// }