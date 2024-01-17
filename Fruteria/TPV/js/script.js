window.addEventListener("load", inicio);


let cajaProductos = document.querySelector("#cajaX");
cajaProductos.innerHTML = "";
let cesta = document.getElementById("cestaCompra");

let cuerpoTabla = document.querySelector("tbody");

let producto = document.createElement("div");
var objeto;

var total = 0;
var calcularPrecio = 0;
let precioTotal = document.getElementById("precio");

let pwd = document.getElementById("idPwd");
let btnGestionAl = document.getElementById("confirmar");
btnGestionAl.onclick = login;

let btnPDF = document.getElementById("imprimirPDF");
btnPDF.onclick = mostrarPDF;

let btnEnviarM = document.getElementById("enviarMail");
btnEnviarM.onclick = enviarMail;

function inicio() {
    //identificar el bloque html de la izquierda donde va el contenido js
    console.log("Entro en inicio");

    cargarContenido();



}

function cargarContenido() {
    console.log("Entro en cargarContenido");
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = cargar;

    function cargar() {
        console.log("Entro en cargar");

        if (this.readyState == 4 && this.status == 200) {
            //Al hacer parse nos devuelve un objeto
            objeto = JSON.parse(this.responseText);
            cargarFrutas();
        }
    }
    xhr.open("GET", "http://moralo.atwebpages.com/menuAjax/productos3/getProductos.php", true);
    xhr.send();

}

function cargarFrutas() {
    console.log("Entro en cargarFrutas");
    producto.className = "row";
    // producto.style.backgroundColor = "blue";

    for (let i = 0; i < objeto.length; i++) {
        let vectorProductos = [];
        vectorProductos.push(objeto[i].id, objeto[i].photo, objeto[i].name, objeto[i].price);
        // let imagen = document.createElement("img");
        // imagen.src = objeto[i].photo;
        // cajaProductos.appendChild(imagen);
        // producto.innerHTML += "<div class='col-lg-4>" +
        //     " <img class='card-img-top' src='" + objeto[i].photo + "' width='90px' height='90px' alt='" + objeto[i].id + "'/>" +
        //     "<div class='card-body' onclick='añadirCesta('" + vectorProductos + "')'>" +
        //     "<h4 class='card-title'>" + objeto[i].name + "</h4>" +
        //     "<p class='card-text'>" + objeto[i].price + "</p>" +
        //     "</div>" +
        //     " </div>";
        // objeto[i].onclick = prompt("Has seleccionado la fruta: " + objeto);

        producto.innerHTML +=
            '<div class="col-lg-4 p-3 m-1 bg-info bg-gradient">' +
            '<img class="card-img-top" onclick=anadirCesta("' + vectorProductos + '") src=' + objeto[i].photo + ' width="90" height="120" alt=' + objeto[i].id + '/>' +
            '<div class="card-body" onclick=anadirCesta("' + vectorProductos + '")>' +
            '<h4 class="card-title">' + objeto[i].name + '</h4>' +
            '<p class="card-text">' + objeto[i].price + '</p></div></div>';

        cajaProductos.appendChild(producto);

    }

}

function anadirCesta(vectorProductos) {
    console.log(vectorProductos);
    let fila = document.createElement("tr");
    let col = document.createElement("td");

    let vectorX = vectorProductos.split(",");
    alert(vectorX);
    let peso = prompt("Teclea los Kgs de " + vectorX[1]);
    parseFloat(peso);
    calcularPrecio = peso * parseFloat(vectorX[3]);

    total = total + calcularPrecio;
    precioTotal.textContent = total;

    if (peso && !isNaN(peso)) {
        fila.innerHTML = '<td>' + vectorX[2] + '</td>' +
            '<td> ' + vectorX[3] + '</td > ' +
            '<td> ' + peso + '</td > ' +
            '<td> ' + calcularPrecio + '</td >' +
            "<td>" + //simular botón con a href añado clase btn btn-danger (color rojo)
            "<div class='col-lg-2 text-center mb-2'><a class='btn btn-danger btn-md'" +
            //anulo el href, no hay link , pero sí hay evento onclick con
            //parámetro incluido: dni de esa tupla
            " href='javascript:void(0)' onclick=eliminar(this,'" + vectorX[0] +
            parseFloat(calcularPrecio) + peso +
            "')>" +
            //texto del botón e icono
            "ELIMINAR<i class='bi-trash'></i></a></div> " +
            "</td>";

        $.ajax({
            url: "http://moralo.atwebpages.com/menuAjax/productos3/actualizarAlmacen.php",
            type: "POST",
            data: {
                id: vectorX[0],
                kgs: peso
            },
        });

    }
    cuerpoTabla.appendChild(fila);
}

function eliminar(fila, id, calculo, peso) {
    //Subir de nivel hasta llegar a elmento padre tabla
    let filaTabla = fila.parentNode.parentNode;
    //Subir un nivel más para coseguir el elemento tr de esa tabla y pasamos la tabla por parametro
    filaTabla.parentNode.remove(filaTabla);
    total = total - calculo;
    precioTotal.textContent = total;

    //Funcion actualizar almacen
    $.ajax({
        url: "http://moralo.atwebpages.com/menuAjax/productos3/actualizarAlmacen.php",
        type: "POST",
        data: {
            id: id, //vectorX[0]
            kgs: peso
        },
    });
}

function login() {
    if (pwd.value == "frutas") {
        window.open("http://127.0.0.1:5500/Fruteria/CRUD/index.html");
    }
}

function mostrarPDF() {
    console.log("Entro en mostrarPDF");
    let ticket1 = document.getElementById("cestaCompra").innerHTML; //TABLA
    console.log();

    var estilo = "<style>" +
        "table {width: 100%;font: 17px Calibri;}" +
        "table, th, td {border: solid 1px #DDD; border-collapse: collapse;" +
        "padding: 2px 3px;text-align: center;}" +
        "</style>";

    // crear una ventana window
    var win = window.open('ticket.pdf', 'Fruteria', 'height=700,width=700');

    win.document.write('<html><head>');
    win.document.write('<title>Ticket</title>'); //cabecera del pdf
    win.document.write(estilo); // estilo cabecera
    win.document.write('</head>');
    win.document.write('<body>');
    win.document.write("<table>");
    win.document.write(ticket1);
    win.document.write("</table>");
    win.document.write("Total: " + precio.textContent); // contenidos dentro del body
    win.document.write('</body></html>');

    win.document.close(); //cerrar ventana
    win.print(); // escribir contenidos

}

function enviarMail() {
    alert("enviar mail");
    Email.send({
        Host: "smtp.gmail.com",
        Username: "mjuareza01@educarex.es",
        Password: "xgkg gimr lssl zsod",
        To: 'profeaugustobriga@gmail.com',
        From: 'profeaugustobriga@gmail.com',
        Subject: "Ticket digital",
        Body: "Gracias por comprar en la frutería augustobriga",
        // Attachments: [
        // {
        // name : "factura.pdf",
        // path : pdfBase64
        // }]
    }).then(function () {
        alert("MAIL ENVIADO OK")
    });
}