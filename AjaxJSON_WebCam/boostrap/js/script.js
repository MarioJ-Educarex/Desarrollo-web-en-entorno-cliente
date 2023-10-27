window.addEventListener("load", inicio);

function inicio() {
    let btnMostrar = document.getElementById("mostrar");
    btnMostrar.addEventListener("click", mostrar);

}

function mostrar() {
    //Crear un objeto XMLhttpRequest
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = cargar;
    function cargar() {
        //CONTROL DE ESTADO DE LA PETICIÓN DE DATOS Y DEL ESTADO DEL SERVIDOR
        if (this.readyState == 4 && this.status == 200) {
            //He accedido al fichero de datos y está abierto el servidor
            //Tengo que averiguar en qué formato me llegan los datos para hacer el parseo

            let idFila = document.querySelector("#fila");
            idFila.innerHTML = "";
            var objeto = JSON.parse(this.responseText);
            objeto.forEach(recorrer);

            function recorrer(item, index) {
                console.log(item.url);

                let divX = document.createElement("div");
                divX.className = "col-lg-3";
                divX.innerHTML = "<video src='" + item.url + "' width='200' height='100' autoplay loop></video>";
                idFila.appendChild(divX);
            }
        }
    }
    //PRIMERO HAY QUE HACER LA PETICIÓN
    xhr.open("GET", "http://camacho.atwebpages.com/webcam/getWebcam.php", true);
    xhr.send();

}