let accion = document.getElementById("aceptar");

let bool = true;

accion.onsubmit = function () {
    console.log("Entro en accion");
    alert("Entro en accion");

    bool = true;

    let user = document.getElementById("uname1").value;
    let smUser = document.getElementById("smUsers");

    let contrasena = document.getElementById("pwd1").value;
    let smContrasena = document.getElementById("smPassword");

    comprobar(user, smUser, contrasena, smContrasena);


    return bool;

}


function comprobar(text, sm, pass, smPass) {
    console.log("Usuario: " + text + " Longitud: " + text.length);

    if (text.length == 0) {
        sm.innerHTML = "* Introduce usuario.";
        bool = false;
    } else if (pass.length == 0) {
        smPass.innerHTML = "* Introduce contraseña.";
        bool = false;
    } else {
        sm.innerHTML = "";
    }
}

