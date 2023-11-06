window.addEventListener("load", inicio);



function inicio() {

    mostrar();

}

function mostrar() {
    let contenedor = document.getElementsByClassName("container");
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = cargar;
    function cargar() {
        if (this.readyState == 4 && this.status == 200) {
            //Al hacer parse nos devuelve un objeto
            var objeto = JSON.parse(this.responseText);

            objeto.forEach(recorrer);
            function recorrer(item, index) {
                let images = document.createElement("div");


                images.innerHTML = "<img src='" + item.imagen + "' width='300' height='200'></img>" + "<p>" + item.texto + "</p>" + "<p>" + item.subtexto + "</p>";

                contenedor.appendChild(images);

            }

        }
    }
    xhr.open("GET", "http://camacho.atwebpages.com/jumbotronAleatorio/getImagenes.php", true);
    xhr.send();

}
