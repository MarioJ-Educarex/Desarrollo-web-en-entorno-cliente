window.onload = inicio;
var ticket = document.querySelector("#cajaTabla");
var bloqueHtml = document.createElement("div");

function inicio() {
    let elemento = document.querySelector("#btnInsertar");
    elemento.addEventListener("click", insertarUsuario);

    cargarTabla();
}
function cargarTabla() {
    console.log("entro en cargarTabla")

    bloqueHtml.innerHTML = "<div class='row'>" +
        "<div class='col-lg-2 text-center' >ID</div>" +
        "<div class='col-lg-2 text-center' >NOMBRE</div>" +
        "<div class='col-lg-2 text-center' >PRECIO</div>" +
        "<div class='col-lg-2 text-center' >PRODUCTO</div>";
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {


        //CONTROL DE ESTADO DE LA PETICIÓN DE DATOS Y DEL ESTADO DEL SERVIDOR
        if (this.readyState == 4 && this.status == 200) {
            //he accedido al fichero de datos y está abierto el servidor
            //tengo que averiguar en qué formato me llegan los datos para hacer el parseo
            var objeto = JSON.parse(this.responseText);

            objeto.forEach(recorrer);

            function recorrer(clientes, index) {
                console.log("vector" + clientes.id);



                let vector = [clientes.id, clientes.nombre, clientes.price, clientes.photo];
                bloqueHtml.innerHTML += "<div class='row'> " +
                    "<div class='col-lg-2 text-center'>" + clientes.id + "</div>" +
                    "<div class='col-lg-2 text-center'>" + clientes.name + "</div>" +
                    "<div class='col-lg-2 text-center'>" + clientes.price + "</div>" +
                    "<div class='col-lg-2 text-center'>" + "<img src='" + clientes.photo + "' width='50px'/>" + "</div>" +
                    //simular botón con a href añado clase btn btn-danger (color rojo)
                    "<div class='col-lg-2 text-center mb-2'><a class='btn btn-danger btn-md'" +
                    //anulo el href, no hay link , pero sí hay evento onclick con 
                    //parámetro incluido: dni de esa tupla
                    " href='javascript:void(0)' onclick=eliminar(\'" + clientes.id + "\')>" +
                    //texto del botón e icono
                    "ELIMINAR<i class='bi-trash'></i></a></div> " +
                    //td del modificar
                    "<div class='col-lg-2 text-center'><a class='btn btn-info btn-md' " +
                    "href='javascript:void(0)' onclick=modificar('" + vector + "')>" +
                    "MODIFICAR<i class='bi bi-arrow-clockwise'></i></a></div>";
            }
        }
    }
    //PRIMERO HAY QUE HACER LA PETICIÓN
    xhr.open("GET", "http://moralo.atwebpages.com/menuAjax/productos3/getProductos.php", true);
    xhr.send();

    tabla.appendChild(bloqueHtml);
}


function insertarUsuario() {
    console.log("entro en insertar");
    let idTxt = document.querySelector("#txtId").value;
    let nombreTxt = document.querySelector("#txtNombre").value;
    let precioTxt = document.querySelector("#txtPrecio").value;
    let fotoTxt = document.querySelector("#txtFoto").value;
    console.log("insertando: " + idTxt)
    $.ajax({
        url: "http://moralo.atwebpages.com/menuAjax/productos3/insertarProductos.php",
        type: "POST",
        data: {
            // sintaxis: variablePHP : variableJs
            id: idTxt,
            name: nombreTxt,
            price: precioTxt,
            photo: fotoTxt
        },
        dataType: "JSON"
    });
    location.reload();

}
function eliminar(id) {
    console.log("entro en eliminar " + id);
    let respuesta = confirm("¿Estás seguro de querer eliminar " + id + "?");
    //cargar el método AJAX que ejecuta el servicio eliminar.php
    if (respuesta) {

        $.ajax({
            //url del servicio
            url: "http://moralo.atwebpages.com/menuAjax/productos3/eliminarProductos.php",
            //method
            type: "POST",
            data: {
                id: id
            },
            dataType: "JSON"

        });
        location.reload();
    }
}
function modificar(vector) {
    console.log("entro en modificar " + vector)
    let cadena = String(vector);
    let deserializar = cadena.split(",");
    document.querySelector("#txtId").value = deserializar[0];
    document.querySelector("#txtId").setAttribute("disabled", true);
    document.querySelector("#txtNombre").value = deserializar[1];
    document.querySelector("#txtPrecio").value = deserializar[2];
    document.querySelector("#txtFoto").value = deserializar[3];
    console.log("dni :" + deserializar[0]);
    document.querySelector("#btnInsertar").disabled = true;

    document.querySelector("#btnModificar").disabled = false;

    $('#formclientesModal').modal("show");
    document.querySelector("#btnModificar").addEventListener("click", accionAjaxModificar);
    function accionAjaxModificar() {
        alert("modficar");

        let idtxt = document.querySelector("#txtId").value;
        let nametxt = document.querySelector("#txtNombre").value;
        let pricetxt = document.querySelector("#txtPrecio").value;
        let phototxt = document.querySelector("#txtFoto").value;

        $.ajax({
            type: "POST",
            url: "http://moralo.atwebpages.com/menuAjax/productos3/modificarProductos.php",
            data: {
                id: idtxt,
                name: nametxt,
                price: pricetxt,
                photo: phototxt
            },
        });
    }
    location.reload();
}