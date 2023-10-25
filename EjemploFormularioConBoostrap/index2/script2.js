window.onload = inicio;


let ciclo = document.querySelector('input[name="radio"]').value;
let modulos = document.querySelectorAll('input[name="modulos"]:checked');
let curso = document.getElementById('selectCurso').value;
let nombre = document.getElementById('nombre').value;
let horas = document.querySelectorAll("select[name=multipleselect]");
let comentario = document.getElementById("exampleFormControlTextarea1").value;

function inicio() {
    console.log("Entro en inicio ");

    let btnAceptar = document.getElementById("aceptar");
    btnAceptar.onclick = obtenerDatos;

    let accion = document.getElementById("cargar");

    accion.onsubmit = function () {

        let smCiclo = document.getElementById("smCiclo");
        let smMod = document.getElementById("smModulo");
        let smCurso = document.getElementById("smCurso");
        let smNombre = document.getElementById("smNombre");
        let smHora = document.getElementById("smHoras");


        if (ciclo == "" || modulos == null || curso == "" || nombre == "" || horas == null) {
            bool = false;
            smCiclo.innerHTML = "*Campo Obligatorio";
            smMod.innerHTML = "*Campo Obligatorio";
            smCurso.innerHTML = "*Campo Obligatorio";
            smNombre.innerHTML = "*Campo Obligatorio";
            smHora.innerHTML = "*Campo Obligatorio";


        }
        return bool;
    }
}

function obtenerDatos() {
    // let ciclo = document.querySelector('input[name="radio"]').value;
    // let smCiclo = document.getElementById("smCiclo");
    // //let modulos = document.getElementsByName("modulos").value;
    // let modulos = document.querySelectorAll('input[name="modulos"]:checked');
    // let smMod = document.getElementById("smModulo");
    let marcados = [];
    modulos.forEach(recorrer);

    function recorrer(item, indice) {

        marcados.push(item.value);
    }

    // let curso = document.getElementById('selectCurso').value;
    // let smCurso = document.getElementById("smCurso");
    // let nombre = document.getElementById('nombre').value;
    // let smNombre = document.getElementById("smNombre");
    // let horas = document.querySelectorAll("select[name=multipleselect]");
    // let smHora = document.getElementById("smHoras");
    console.log(horas);
    let horasMarcadas = [];

    for (let index = 0; index < horas[0].length; index++) {
        if (horas[0][index].selected) {
            horasMarcadas.push(horas[0][index].value);
        }
    }

    // let comentario = document.getElementById("exampleFormControlTextarea1").value;

    console.log("Ciclo: " + ciclo);
    console.log("Modulos: " + marcados);
    console.log("Curso: " + curso);
    console.log("Nombre: " + nombre);

    // Construyendo el mensaje con los datos recogidos
    // let mensaje = "Ciclo: " + ciclo + "\nMódulos: " + marcados + "\nCurso: " + curso + "\nNombre: " + nombre;
    let mensaje =
        "Ciclo: " +
        ciclo +
        "\nModulos: " +
        marcados +
        "\nNombre: " +
        nombre +
        "\nCurso: " +
        curso +
        "\nHoras asistidas: " +
        horasMarcadas +
        "\nComentario: " +
        comentario;

    // Muestra los datos en un alert
    alert(mensaje);
}
