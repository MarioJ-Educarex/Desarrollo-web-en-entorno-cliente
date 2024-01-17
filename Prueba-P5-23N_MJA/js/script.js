window.addEventListener("load", inicio);

let cuerpoTabla = document.querySelector(".carousel-inner");

function inicio() {
    mostrar();
}

function mostrar() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = cargar;
    function cargar() {
        if (this.readyState == 4 && this.status == 200) {
            var objeto = JSON.parse(this.responseText);

            objeto.forEach(recorrer);
            function recorrer(item, index) {
                let itemClass = index === 0 ? 'carousel-item active' : 'carousel-item';
                let itemDiv = document.createElement("div");
                itemDiv.className = itemClass;

                itemDiv.innerHTML =
                    "<h5>" + item.ciudad_nombre + "</h5>" +
                    "<p>Población: " + item.ciudad_poblacion + "</p>" +
                    item.video +
                    "<img src='" + item.imagen + "' width='400' height='200'></img>" +
                    item.mapa +
                    "<p>ID: " + item.ciudad_ID + "</p>";

                cuerpoTabla.appendChild(itemDiv);
            }
        }
    }
    xhr.open("GET", "http://camacho.atwebpages.com/carouselCiudades2/getCiudades.php", true);
    xhr.send();
}
