window.addEventListener("load", inicio);


function inicio() {
    var body = document.querySelector("body");
    var identificador = document.createElement("span");

    // let btnMostrar = document.getElementById("mostrar");
    // btnMostrar.addEventListener("click", mostrar);
    let cont = 0;
    var temporizador = setInterval(mostrar, 3000);

    function mostrar() {
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = cargar;
        function cargar() {
            if (this.readyState == 4 && this.status == 200) {
                //Al hacer parse nos devuelve un objeto
                var objeto = JSON.parse(this.responseText);

                if (7 == cont) {
                    cont = 0;
                } else {
                    console.log(cont);
                    identificador.textContent = "ID: " + (cont + 1);
                    body.appendChild(identificador);
                    let contenedor = document.getElementById("parrafo");
                    contenedor.setAttribute("src", objeto[cont].url);
                    console.log(objeto[cont].url);
                    contenedor.setAttribute("autoplay", true);
                    // contenedor.innerHTML = "<h3>ID:  " + cont + "</h3>" + "<video src='" + objeto[cont].url + "' width='700' height='500' autoplay loop></video>";
                    contenedor.className = "gallery";
                    body.appendChild(contenedor);
                    cont++;
                }


            }
        }
        xhr.open("GET", "getWebcam.json", true);
        xhr.send();

    }

}


