window.onload = inicio;

const NUM_IMAGES = 20;

function inicio() {
    var imagenReferencia; //Para comparar

    let contenedorP = document.createElement("div");
    contenedorP.className = "container";
    let cuerpo = document.querySelector("body");
    cuerpo.appendChild(contenedorP);

    let contenedorR = document.createElement("div");
    contenedorR.className = "gallery";
    contenedorP.appendChild(contenedorR);

    let contenedorS = document.createElement("fieldset");
    contenedorS.className = "gallery";
    let leyenda = document.createElement("legend");
    leyenda.textContent = "Practica 8";

    contenedorS.appendChild(leyenda);
    contenedorP.appendChild(contenedorS);


    cuerpo.appendChild(contenedorP);

    refrescar();


    let contadorBordes = 0;
    var segundos = 30;
    var temporizador = setInterval(refrescar, 5000);

    function refrescar() {
        contenedorS.innerHTML = "";
        contenedorR.innerHTML = "";

        contenedorS.appendChild(leyenda);

        // while (contenedorS.firstChild) {
        //     contenedorS.removeChild(contenedorS.firstChild);
        // }


        /* let arrayimg = document.querySelectorAll("img");
         console.log("arrayimg");
         arrayimg.forEach(function (item, indice) {
             contenedorS.removeChild(item);
         });*/

        cargarImagenReferencia();

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

            /*   images.onmouseover = expandir;
               images.onmouseleave = encoger;
               images.onclick = borde;*/

            images.onclick = comparar;

            function comparar() {
                console.log(images.getAttribute("src"));
                console.log("Imagen de referencia" + imagenReferencia);

                let imagenClick = images.getAttribute("src");

                if (imagenClick.includes(imagenReferencia)) {
                    alert("Aciertas");
                } else {
                    alert("Fallas");
                }
            }

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
                    contadorBordes++;
                }
            }

        }

    }

    function cargarImagenReferencia() {
        let imgR = document.createElement("img");
        imgR.className = "gallery img";
        let numRandom = Math.floor(Math.random() * 20);
        let nHM = Math.round(Math.random() * 1);

        if (nHM == 1) {
            let rutaM = "https://randomuser.me/api/portraits/men/" + numRandom + ".jpg";
            imgR.src = rutaM;
        } else {
            let rutaW = "https://randomuser.me/api/portraits/women/" + numRandom + ".jpg";
            imgR.src = rutaW;
        }
        imagenReferencia = imgR.src; //Para comparar
        contenedorR.appendChild(imgR);

    }

}

