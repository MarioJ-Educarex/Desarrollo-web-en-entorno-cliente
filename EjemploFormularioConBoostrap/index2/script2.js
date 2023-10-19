window.onload = inicio;

function inicio() {
    console.log("Entro en inicio ");
    let btnAceptar = document.getElementById("aceptar");
    btnAceptar.onclick = obtenerDatos;


}

function obtenerDatos() {
    let ciclo = document.querySelector('input[name="radio"]').value;
    //let modulos = document.getElementsByName("modulos").value;
    let modulos = document.querySelectorAll('input[name="modulos"]:checked');
    let marcados = [];
    modulos.forEach(recorrer);

    function recorrer(item, indice) {

        marcados.push(item.value);
    }

    let curso = document.getElementById('selectCurso').value;
    let nombre = document.getElementById('nombre').value;

    console.log("Ciclo: " + ciclo);
    console.log("Modulos: " + marcados);
    console.log("Curso: " + curso);
    console.log("Nombre: " + nombre);

    // Construyendo el mensaje con los datos recogidos
    let mensaje = "Ciclo: " + ciclo + "\nMódulos: " + marcados + "\nCurso: " + curso + "\nNombre: " + nombre;

    // Muestra los datos en un alert
    alert(mensaje);
}
