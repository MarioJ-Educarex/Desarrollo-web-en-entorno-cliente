window.addEventListener("load", inicio);

function inicio() {


    let btnMostrar = document.getElementById("mostrar");
    btnMostrar.addEventListener("click", mostrar);

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
                let nr = Math.ceil(Math.random() * 8);
                if (nr === index) {
                    console.log("Número random: " + nr);
                    console.log("index: " + index);
                    // let cabecera = document.createElement("h3");
                    // cabecera.textContent = "ID: " + index;
                    //   cabecera.innerHTML = "<br/>";
                    let contenedor = document.getElementById("parrafo").innerHTML = "<h3>ID:  " + index + "</h3>" + "<video src='" + item.url + "' width='900' height='700' autoplay loop></video>";
                    contenedor.className = "gallery";
                    //document.getElementById("parrafo").appendChild(cabecera);
                }
            }

        }
    }
    xhr.open("GET", "http://camacho.atwebpages.com/webcam/getWebcam.php", true);
    xhr.send();

}
