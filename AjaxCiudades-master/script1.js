window.onload = inicio;


function inicio() {
    document.getElementById("btnInsertar").addEventListener("click", insertarCiudades);
    document.getElementById("btnMostrar").addEventListener("click", mostrar);
    document.getElementById("btnEliminar").addEventListener("click", eliminar);
    document.getElementById("btnModificar").addEventListener("click", modificar);
}
function insertarCiudades() {
    console.log("entro en insertar Ciudades");
    var id = document.getElementById("_id").value;
    var nombre = document.querySelector("#_nombre").value;
    var poblacion = document.querySelector("#_poblacion").value;
    var densidad = document.querySelector("#_densidad").value;
    var extension = document.querySelector("#_superficie").value;
    $.ajax({
        url: "http://moralo.atwebpages.com/menuAjax/ciudades/insertarCiudades.php",
        type: "POST",
        data: {
            id: id,
            nombre: nombre,
            poblacion: poblacion,
            densidad: densidad,
            extension: extension

        }
    });


    mostrar();
}

function mostrar() {
    console.log("Entro en mostrar");

    var cajaMostrarContenido = document.querySelector("#mostrarCiudades");
    var bloqueHtml = document.createElement("div");
    var xhr = new XMLHttpRequest;
    xhr.onreadystatechange = cargar;
    function cargar() {

        if (this.readyState == 4 && this.status == 200) {
            var objeto = JSON.parse(this.responseText);
            objeto.forEach(recorrer);
            function recorrer(datos, index) {
                bloqueHtml.innerHTML += "<div class='row'>" +
                    "<div class='col-lg-2'>" + datos.id + "</div>" +
                    "<div class='col-lg-2'>" + datos.nombre + "</div>" +
                    "<div class='col-lg-2'>" + datos.poblacion + "</div>" +
                    "<div class='col-lg-2'>" + datos.densidad + "</div>" +
                    "<div class='col-lg-2'>" + datos.extension + "</div></div>";
            }
            cajaMostrarContenido.appendChild(bloqueHtml);
        }

    }
    xhr.open("POST", "http://moralo.atwebpages.com/menuAjax/ciudades/getCiudades.php")
    xhr.send()
}

function eliminar() {
    console.log("Entro en eliminar");

    var ciudadId = document.getElementById("_id").value; // ID de la ciudad a eliminar
    $.ajax({
        type: "GET",
        url: "http://moralo.atwebpages.com/menuAjax/ciudades/EliminarCiudades.php",
        data: { id: ciudadId },
    });
}

function modificar() {
    console.log("Entro en modificar");

    var ciudadId = document.getElementById("_id").value; // ID de la ciudad a modificar
    var nombre = document.querySelector("#_nombre").value;
    var poblacion = document.querySelector("#_poblacion").value;
    var densidad = document.querySelector("#_densidad").value;
    var extension = document.querySelector("#_superficie").value;


    $.ajax({
        type: "POST",
        url: "http://moralo.atwebpages.com/menuAjax/ciudades/modificarCiudades.php",
        data: {
            id: ciudadId,
            nombre: nombre,
            poblacion: poblacion,
            densidad: densidad,
            extension: extension
        },
    });
}