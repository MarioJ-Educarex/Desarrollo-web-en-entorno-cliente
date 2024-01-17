window.addEventListener("load", inicio);


function inicio() {

    let ticket = document.getElementById("inventarioStock");
    let stockActual = 0;
    let stockMinimo = 0;

    inventarioFruteria();

    document.getElementById("imprimirPDF").onclick = (function () {
        var estilo = "<style>" +
            "table {width: 100%;font: 17px Calibri;}" +
            "table, th, td {border: solid 1px #DDD; border-collapse: collapse;" +
            "padding: 2px 3px;text-align: center;}" +
            "</style>";

        let infoProv = ticket.innerHTML;

        let win = window.open("Inventario_Fruteria.pdf", "Stock Fruteria", "height=600,width=600");
        win.document.write('<html><head>');
        win.document.write('<title>Stock-Frutería</title>'); //cabecera del pdf
        win.document.write(estilo); // estilo cabecera
        win.document.write('</head>');
        win.document.write('<body>');
        win.document.write('<h1>Contacta con el proveedor (stock insuficiente)</h1>');
        win.document.write('<table>');
        win.document.write(infoProv);
        win.document.write('</table>');
        win.document.write('</body></html>');

        win.document.close(); //cerrar ventana 
        win.print();
    });

    function inventarioFruteria() {
        let cabeceraTicket = document.createElement("tr");
        ticket.innerHTML =
            "<th scope='col'>Nombre del producto</th>" +
            "<th scope='col'>Precio</th>" +
            "<th scope='col'>Cantidad para pedir</th>";

        ticket.appendChild(cabeceraTicket);

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = cargar;
        function cargar() {
            if (this.readyState == 4 && this.status == 200) {
                objeto = JSON.parse(this.responseText);
                objeto.forEach(function (datos, index) {
                    stockActual = parseInt(datos.stockActual);
                    stockMinimo = parseInt(datos.stockMinimo);
                    if (stockActual < stockMinimo) {
                        let producto = document.createElement("tr");

                        producto.innerHTML =
                            "<td>" + datos.name + "</td>" +
                            "<td>" + datos.price + "€</td>" +
                            "<td class='text-danger bg-warning '>" + (stockMinimo - stockActual) + "Kg</td>";


                        ticket.appendChild(producto);
                    }
                });
            }
        }

        xhr.open("GET", "http://moralo.atwebpages.com/menuAjax/productos3/getProductos.php", true);
        xhr.send();

    }

}

