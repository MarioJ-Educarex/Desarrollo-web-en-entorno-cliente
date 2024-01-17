window.onload = inicio;

function inicio() {
    console.log("Entro en inicio");
    let btnInsertar = document.getElementById("btnInsertar");
    btnInsertar.onclick = insertarCiudades;

    // btnInsertar.addEventListener = ("click", insertarCiudades);


}

function insertarCiudades() {
    console.log("Entro en insertar ciudades");

    var id = document.getElementById("_id").value;
    var nombre = document.getElementById("_nombre").value;
    var poblacion = document.getElementById("_poblacion").value;
    var densidad = document.getElementById("_densidad").value;
    var extension = document.getElementById("_superficie").value; //superficie

    $.ajax({
        url: "http://moralo.atwebpages.com/menuAjax/ciudades/insertarCiudades.php",
        type: "POST",
        data: {
            id: id,
            nombre: nombre,
            poblacion: poblacion,
            densidad: densidad,
            extension: extension, //superficie
        }

    });
    mostrar();
}

function mostrar() {
    let cajaMostrarContenido = document.getElementById("mostrarCiudades");
    let bloqueHtml = document.createElement("div");
    console.log("Entro en mostrar");

    var xhr = new XMLHttpRequest;
    xhr.onreadystatechange = cargar;

    function cargar() {
        console.log("Entro en cargar");
        if (this.readyState == 4 && this.status == 200) {
            var objeto = JSON.parse(this.responseText);

            objeto.forEach(recorrer);

            function recorrer(datos, index) {
                bloqueHtml.innerHTML += "<div class='row'" +
                    "<div class='col-lg-2'>" + datos.id + "<div/>"
                    + "<div class='col-lg-2'>" + datos.nombre + "<div/>"
                    + "<div class='col-lg-2'>" + datos.poblacion + "<div/>"
                    + "<div class='col-lg-2'>" + datos.densidad + "<div/>"
                    + "<div class='col-lg-2'>" + datos.extension + "<div/>"
                    + "<div/>";
            }

            cajaMostrarContenido.appendChild(bloqueHtml);
        }

    }
    xhr.open("POST", "http://moralo.atwebpages.com/menuAjax/ciudades/getCiudades.php");
    xhr.send();

}