window.addEventListener("load", inicio);

let cuerpoTabla = document.querySelector("tbody");

function inicio() {

    mostrar();

}

function mostrar() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = cargar;
    function cargar() {
        if (this.readyState == 4 && this.status == 200) {
            //Al hacer parse nos devuelve un objeto
            var objeto = JSON.parse(this.responseText);

            objeto.forEach(recorrer);
            function recorrer(item, index) {
                let fila = document.createElement("tr");
                // let col = document.createElement("td");

                fila.innerHTML =
                    "<td scope='col'>" + item.ciudad_nombre + "</td>" +
                    "<td scope='col'>" + item.ciudad_poblacion + "</td>" +
                    "<td scope='col'>" + item.video + "</td>" +
                    "<td scope='col'> <img src='" + item.imagen + "' width='400' height='200'></img>" + "</td>" +
                    "<td scope='col'>" + item.mapa + "</td>" +
                    "<td scope='col'>" + item.ciudad_ID + "</td>";

                cuerpoTabla.appendChild(fila);

            }

        }
    }
    xhr.open("GET", "http://camacho.atwebpages.com/carouselCiudades2/getCiudades.php", true);
    xhr.send();

}
