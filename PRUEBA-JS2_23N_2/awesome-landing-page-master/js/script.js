window.onload = inicio;

let carrousel = document.getElementById("carousel-inner-dinamic");
let carrousel_indicat = document.getElementById("lista");

function inicio() {
    console.log("Entro en inicio");
    carrousel.innerHTML = "";

    showCarrousel();

}

function showCarrousel() {
    console.log("Entro en mostrar carrousel");
    //var cajaMostrarContenido = document.querySelector("#mostrarRepresentantes");
    var bloqueHtml = document.createElement("div");
    var xhr = new XMLHttpRequest;
    xhr.onreadystatechange = cargar;
    function cargar() {

        if (this.readyState == 4 && this.status == 200) {
            var objeto = JSON.parse(this.responseText);
            objeto.forEach(recorrer);
            function recorrer(datos, index) {
                if (index == 1) {
                    bloqueHtml.className = "item active";
                } else {
                    bloqueHtml.className = "item";
                }



                //PARTE 1: LISTA OL
                //Creamos el elemento li de la lista para cada imagen
                let elemento = document.createElement("li");
                elemento.setAttribute("data-target", "#carouselId");
                elemento.setAttribute("data-slide-to", index);

                //Compruebo si es el primer li
                if (index == 0) {
                    elemento.className = "active";
                }
                carrousel_indicat.appendChild(elemento);
                //Meto los li a la lista
                carrousel.appendChild(elemento);
                carrousel.appendChild(carrousel_indicat);

                bloqueHtml.innerHTML = "<div class='mask'>" + "<img src='" + datos.imagen + "'>" + "</div>" +
                    "<div class='carousel - testimonial - caption'>" +
                    " <p>" + datos.nombre + "</p>" +
                    "<h3>" + "Cargo: " + datos.cargo + " Edad: " + datos.edad + " Dirección" + datos.direccion + "</h3>" +
                    "</div>";

                carrousel.appendChild(bloqueHtml);
            }



        }

    }
    xhr.open("POST", "http://moralo.atwebpages.com/Empleados/getEmpleados.php")
    xhr.send()
}