window.addEventListener("load", inicio);

let comidas = document.getElementById("lunch");

function inicio() {

    comidas.innerHTML = "";
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

                let caja = document.createElement("div");
                caja.classList.add("col-lg-4", "menu-item");

                // let link = document.createElement("a");
                // link.setAttribute("href", item.imagen);
                // link.className = "glightbox";

                // let image = document.createElement("img");
                // image.src = item.imagen;
                // //image.setAttribute("src", item.imagen);
                // image.classList.add("menu-img", "img-fluid");

                // link.appendChild(image);

                // caja.appendChild(link);
                caja.innerHTML = "<a href='" + item.imagen + "' class='glightbox'><img src='" + item.imagen + "'class='menu-img' 'img-fluid' width='400' height='200' alt = '' ></a >" + "<h4>" + item.nombre + "</h4>" +
                    "<p class=ingredients>" + item.ingredientes + "</p>" +
                    "<p class='price'>" + item.precio + "</p>";

                comidas.appendChild(caja);

            }

        }
    }
    xhr.open("GET", "http://moralo.atwebpages.com/restaurante/getPlatos.php", true);
    xhr.send();

}
