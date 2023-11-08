console.log("entro al js");

window.addEventListener("load", inicio);

function inicio() {

    console.log("entro al inicio");

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            //Cogemos la lista y el div contenedor del DOM
            let contenedor = document.getElementById("contenedor");
            let lista = document.getElementById("lista");

            //Al hacer parse nos devuelve un objeto
            var arrayJson = JSON.parse(this.responseText);

            arrayJson.forEach(function (itemVideo, posicion) {

                //PARTE 1: LISTA OL
                //Creamos el elemento li de la lista para cada video
                let elemento = document.createElement("li");
                elemento.setAttribute("data-target", "#myCarousel");
                elemento.setAttribute("data-slide-to", posicion);

                //Compruebo si es el primer li
                if (posicion == 0) {
                    elemento.className = "active";
                }

                //Meto los li a la lista
                lista.appendChild(elemento);

                //PARTE 2: DIV DEL VIDEO
                //Creamos el div que  va a tener las clases y del video
                let video = document.createElement("div");

                //Compruebo si la video es el primer item del carousel
                if (posicion == 0) {
                    video.className = "item active";
                } else {
                    video.className = "item";
                }

                //PARTE 3: IMAGEN
                //Creamos la imagen y le damos atributos
                video.innerHTML = "<video src='" + itemVideo.url + "' width='90%' autoplay loop></video>";
                // video.setAttribute("src", itemVideo.url);
                // video.style = "width:100%;";

                //Meto la imagen en la video y la video en el contenedor
                //video.appendChild(video);
                contenedor.appendChild(video);

            });

        }
    };

    xhr.open("GET", "http://camacho.atwebpages.com/webcam/getWebcam.php", true);
    xhr.send();

}