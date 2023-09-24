window.onload = inicio;

// Identificar elementos html
let btnCargar = document.getElementById("mostrarJS");
let contenedor = document.getElementsByClassName("container");
let boxImages = document.getElementById("cajaImagenes");

const personas = ["women", "men"];
const NUM_IMAGES = 20;

function inicio() {
    btnCargar.onclick = cargar;
    // Cargar nuevas imagenes
    for (let i = 0; i < NUM_IMAGES; i++) {
        let hm = Math.round(Math.random() * 1); // Elige aleatoriamente si la foto será de hombre o mujer
        let num = Math.round(Math.random() * 99);
        let images = document.createElement("img");
        images.setAttribute("src", "https://randomuser.me/api/portraits/" + personas[hm] + "/" + num + ".jpg");
        boxImages.appendChild(images);
    }
}

function cargar() {
    // Eliminar imgenes existentes
    while (boxImages.firstChild) {
        boxImages.removeChild(boxImages.firstChild);
    }

    // Cargar nuevas imagenes
    for (let i = 0; i < NUM_IMAGES; i++) {
        let hm = Math.round(Math.random() * 1); // Elige aleatoriamente si la foto será de hombre o mujer
        let num = Math.round(Math.random() * 99);
        let images = document.createElement("img");
        images.setAttribute("src", "https://randomuser.me/api/portraits/" + personas[hm] + "/" + num + ".jpg");
        boxImages.appendChild(images);
    }
}
