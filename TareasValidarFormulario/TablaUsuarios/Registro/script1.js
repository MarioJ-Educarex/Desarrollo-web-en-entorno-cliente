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

    let repContrasena = document.getElementById("pwd2").value;
    let smRepContrasena = document.getElementById("smPassword2");

    let mail = document.getElementById("email").value;
    let smMail = document.getElementById("smEmail");


    validacionUser(user, smUser);
    validacionPswd(contrasena, smContrasena);
    validacionPswd2(repContrasena, contrasena, smRepContrasena);
    validacionMail(mail, smMail);


    return bool;

}

//Función para validar el campo usuario
function validacionUser(text, sm) {
    console.log("Usuario: " + text + " Longitud: " + text.length);

    if (text == "") {
        sm.innerHTML = "* Campo obligatorio.";
        bool = false;
    }
    // else if (text.length < 8) {
    //     sm.innerHTML = "* Mínimo 8 caracteres.";
    //     bool = false;
    // } else if (!/[A-Z]/.test(text) || !/\d/.test(text)) {
    //     sm.innerHTML = "* Debe contener al menos una letra mayúscula y un número.";
    //     bool = false;
    // } 
    else {
        sm.innerHTML = "";
    }
}

//Función para validar el campo mail
function validacionMail(text, sm) {
    console.log("E-mail: " + text + " Longitud: " + text.length);

    if (text == "") {
        sm.innerHTML = "* Campo obligatorio.";
        bool = false;
    } else if ((text.match(/@/g) || []).length !== 1) {
        sm.innerHTML = "* Debe contener una sola arroba ('@').";
        bool = false;
    }
    else {
        sm.innerHTML = "";
    }
}

//Función para validar el campo contraseña
function validacionPswd(text, sm) {
    console.log("Contraseña: " + text + " Longitud: " + text.length);
    // const expresionRegular = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\$).{8,}$/;
    if (text == "") {
        sm.innerHTML = "* Campo obligatorio.";
        bool = false;
    } else if (text.length < 8) {
        sm.innerHTML = "* Mínimo 8 caracteres.";
        bool = false;
    } else if (!/[A-Z]/.test(text) || !/[a-z]/.test(text) || !/\d/.test(text) || !text.includes('$')) {
        sm.innerHTML = "* Debe contener al menos una letra mayúscula, una minúscula, un número y el símbolo $.";
        bool = false;
    } else {
        sm.innerHTML = "";
    }
}

//Función para validar el campo repite contraseña
function validacionPswd2(text, passwd, sm) {
    console.log("Contraseña: " + text + " Longitud: " + text.length);

    if (text == "") {
        sm.innerHTML = "* Campo obligatorio.";
        bool = false;
    } else if (text !== passwd) {
        sm.innerHTML = "* Contraseña distinta.";
        bool = false;
    } else {
        sm.innerHTML = "";
    }
}

