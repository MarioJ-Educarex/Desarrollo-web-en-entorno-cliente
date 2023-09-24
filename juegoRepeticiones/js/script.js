window.onload = inicio;

let btjugar = document.getElementById("jugar");
let spPuntos2 = document.getElementById("sppuntos2");
let spPuntos = document.getElementById("sppuntos");
let boxPadre = document.getElementById("cajaPadre");


const N_BOX = 5;

function inicio() {
    btjugar.onclick = juego;

}

function juego() {

    let imagenes = []; // Almacenar las imágenes generadas en esta jugada
    let hayRepetidas = false;
    let cajas = document.createElement("div");
    cajas.setAttribute("class", "cajas");
    boxPadre.innerHTML = '';

    for (let i = 0; i < N_BOX; i++) {
        let num = Math.round(Math.random() * 19);

        let image = document.createElement("img");
        image.setAttribute("src", "img/" + num + ".jpg");
        cajas.appendChild(image);
        boxPadre.appendChild(cajas);


        cajas = document.createElement("div");
        cajas.setAttribute("class", "cajas");
        imagenes[i] = num;
    }

    // Comprobar si hay imágenes repetidas
    let i = 0;
    while (i < imagenes.length && !hayRepetidas) {
        let j = i + 1;
        while (j < imagenes.length && !hayRepetidas) {
            if (imagenes[i] == imagenes[j]) {
                hayRepetidas = true;
            }
            j++;
        }
        i++;
    }

    // Actualizar el mensaje en sppuntos
    if (hayRepetidas) {
        spPuntos.textContent = "HAY REPETIDAS";
    } else {
        spPuntos.textContent = "NO HAY REPETIDAS";
    }

}
