window.onload = inicio;

var tabla = document.querySelector("#cajaTabla");
// var bloqueHtml = document.createElement("div");
var bloqueHtml = document.createElement("table");

function inicio() {
    let btnAdd = document.querySelector("#btnInsertar");
    btnAdd.addEventListener("click", insertarUsuario);


    cargarTabla();

}

function cargarTabla() {
    // bloqueHtml.innerHTML = "<div class='row'>" +
    //     "<div class='col-lg-2 text-center'>DNI</div>" +
    //     "<div class='col-lg-2 text-center'>NOMBRE</div>" +
    //     "<div class='col-lg-2 text-center'>APELLIDO</div>" +
    //     "<div class='col-lg-2 text-center'>TELEFONO</div>" +
    //     "<div class='col-lg-2 text-center'>ELIMINAR</div>" +
    //     "<div class='col-lg-2 text-center'>MODIFICAR</div>" +
    //     "<div/>";

    bloqueHtml.innerHTML = "</br><tr>" +
        "<th>DNI</th>" +
        "<th>NOMBRE</th>" +
        "<th>APELLIDO</th>" +
        "<th>TELEFONO</th>" +
        "<th>ELIMINAR</th>" +
        "<th>MODIFICAR</th>" +
        "<tr/>";

    var xhr = new XMLHttpRequest;
    xhr.onreadystatechange = cargar;
    function cargar() {

        if (this.readyState == 4 && this.status == 200) {
            var objeto = JSON.parse(this.responseText);
            objeto.forEach(recorrer);
            function recorrer(datos, index) {
                let vector = [datos.dni, datos.nombre, datos.apellido, datos.telefono];

                bloqueHtml.innerHTML += "<tr>" +
                    "<td>" + datos.dni + "</td>" +
                    "<td>" + datos.nombre + "</td>" +
                    "<td>" + datos.apellido + "</td>" +
                    "<td>" + datos.telefono + "</td>" +
                    //Simular el botón con a href, añado clase btn btn-danger (color rojo)
                    //Anulo el href, no hay link, pero si hay un evento onclick
                    //parametro incluido: dni de esa tupla
                    //texto del boton e icono
                    "<td><a href='javascript:void(0)' onclick=eliminar(\'" + datos.dni + "\') class='btn btn-danger btn-sm'>Eliminar <i class='bi-trash'></i></a></td>" +
                    "<td><a href='javascript:void(0)' onclick=modificar('" + vector + "') class='btn btn-dark btn-sm'>Modificar <i class='bi-pencil'></i></a></td>" +
                    "<tr/>";

                // bloqueHtml.innerHTML += "<div class='row'>" +
                //     "<div class='col-lg-2 text-center'>" + datos.dni + "</div>" +
                //     "<div class='col-lg-2 text-center'>" + datos.nombre + "</div>" +
                //     "<div class='col-lg-2 text-center'>" + datos.apellido + "</div>" +
                //     "<div class='col-lg-2 text-center'>" + datos.telefono + "</div>" +
                //     "<div class='col-lg-2 text-center'><a href='javascript:void(0)' onclick=eliminar(\'" + datos.dni + "\') class='btn btn-sm btn-danger btn-md'>Eliminar <span class='glyphicon glyphicon-trash'></span></a></div>" +
                //     "<div class='col-lg-2 text-center'><a href='javascript:void(0)' onclick=modificar(" + vector + ") class='btn btn-sm btn-dark btn-md'>Modificar <span class='glyphicon glyphicon-pencil'></span></a></div>" +
                //     "<div/>";

            }
            tabla.appendChild(bloqueHtml);
        }

    }
    xhr.open("GET", "http://moralo.atwebpages.com/menuAjax/clientes/getClientes.php")
    xhr.send()

    tabla.appendChild(bloqueHtml);
}

function insertarUsuario() {
    console.log("Entro en insertar");

    let dniTxt = document.querySelector("#txtDni").value;
    let nombreTxt = document.querySelector("#txtNombre").value;
    let apellidoTxt = document.querySelector("#txtApellido").value;
    let telefonoTxt = document.querySelector("#txtTelefono").value;

    alert(dniTxt);
    $.ajax({
        type: "POST",
        url: "http://moralo.atwebpages.com/menuAjax/clientes/insertarClientes.php",
        data: {
            dni: dniTxt,
            nombre: nombreTxt,
            apellido: apellidoTxt,
            telefono: telefonoTxt
        },
        dataType: "JSON",
    });
    location.reload();

}

function eliminar(dni) {
    console.log("Entro en eliminar. DNI: " + dni);
    let respuesta = confirm("¿Estás seguro de querer eliminar?" + dni);

    if (respuesta) {
        //cargar el método Ajax que ejecuta el servicio eliminar.php
        console.log(respuesta + "eliminar");
        $.ajax({
            url: "http://moralo.atwebpages.com/menuAjax/clientes/eliminarClientes.php",
            type: "POST",
            //method
            data: {
                dni: dni
            },
            dataType: "JSON"
        });
        //location.reload();
    }

}

function modificar(vector) {
    console.log("Entro en modificar. Vector: " + vector);

    let cadena = String(vector);
    let deserializar = cadena.split(",");

    document.querySelector("#txtDni").value = deserializar[0];
    document.querySelector("#txtDni").setAttribute("disabled", true);
    document.querySelector("#txtNombre").value = deserializar[1];
    document.querySelector("#txtApellido").value = deserializar[2];
    document.querySelector("#txtTelefono").value = deserializar[3];
    document.querySelector('#btnInsertar').setAttribute("disabled", true);
    document.querySelector('#btnModificar').disabled = false;

    $('formclientesModal').modal("show");

    document.querySelector('#btnModificar').addEventListener("click", accionAjaxModificar);

    function accionAjaxModificar() {
        console.log("modificar");

        $.ajax({
            type: "POST",
            url: "http://moralo.atwebpages.com/menuAjax/clientes/modificarClientes.php",
            data: {
                dni: dniTxt,
                nombre: nombreTxt,
                apellido: apellidoTxt,
                telefono: telefonoTxt
            },
        });
    }
}
