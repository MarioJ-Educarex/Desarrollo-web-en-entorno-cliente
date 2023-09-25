window.onload = inicio;

const NUM_IMAGES = 20;

function inicio() {
    let contenedorP = document.createElement("div");
    contenedorP.className = "container";
    let cuerpo = document.querySelector("body");
    cuerpo.appendChild(contenedorP);

    let contenedorS = document.createElement("fieldset");
    contenedorS.className = "gallery";
    let leyenda = document.createElement("legend");
    leyenda.textContent = "Practica 8";

    contenedorS.appendChild(leyenda);
    contenedorP.appendChild(contenedorS);


    cuerpo.appendChild(contenedorP);

    refrescar();
    var contadorBordes = 0;
    var segundos = 30;
    var temporizador = setInterval(refrescar, 50000);

    function refrescar() {
        //contenedorS.innerHTML = "";

        // while (contenedorS.firstChild) {
        //     contenedorS.removeChild(contenedorS.firstChild);
        // }


        let arrayimg = document.querySelectorAll("img");
        console.log("arrayimg");
        arrayimg.forEach(function (item, indice) {
            contenedorS.removeChild(item);
        });


        for (let i = 0; i < NUM_IMAGES; i++) {
            let numRandom = Math.floor(Math.random() * 20);
            let rutaM = "https://randomuser.me/api/portraits/men/" + numRandom + ".jpg";
            let rutaW = "https://randomuser.me/api/portraits/women/" + numRandom + ".jpg";
            let images = document.createElement("img");
            images.className = "gallery img";

            if (i % 2 == 0) {
                images.setAttribute("src", rutaM);
                contenedorS.appendChild(images);
            } else {
                images.src = rutaW;
                contenedorS.appendChild(images);
            }

            // if (contadorBordes == 6) {
            //     console.log("desactivar");
            //     let arrayimg = document.querySelectorAll("img");
            //     console.log("arrayimg");
            //     arrayimg.forEach(function (item, indice) {
            //         item.disabled = true;
            //     });
            // }
            images.onmouseover = expandir;
            images.onmouseleave = encoger;
            images.onclick = borde;


            function expandir() {
                images.style.transform = "scale(2)";
            }

            function encoger() {
                images.style.transform = "scale(1)";
            }

            function borde() {
                console.log(images.className);
                if (images.className.includes("ponerBorde")) {

                    images.className = "quitarBorde";
                    contadorBordes--;
                } else {
                    if (contadorBordes == 6) {
                        return;
                    }
                    images.className = "ponerBorde";
                    contadorBordes--;
                }
            }

        }

    }

}

