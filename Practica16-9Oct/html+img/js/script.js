window.onload = inicio;

const imagenes = ["./img/gallery/gallery-1.jpg", "./img/gallery/gallery-2.jpg", "./img/gallery/gallery-3.jpg", "./img/gallery/gallery-4.jpg", "./img/gallery/gallery-5.jpg", "./img/gallery/gallery-6.jpg", "./img/gallery/gallery-7.jpg", "./img/gallery/gallery-8.jpg"]
const ciudades = ["Londres", "Tokyo", "Roma", "Berlín", "New York", "Toril", "Talayuela", "Navalmoral"]
const traduccionMenu = ["Team A", "Team B", "Team C", "Team D", "Team E"]
const Servicios = ["RRHH", "Contabilidad", "Marketing", "Diseño", "Producción", "Desarrollo"]
const nombreWeb = "DWEC"
const subTitulo = "Desarrollo web entorno cliente"
let logotipo = "./img/apple-touch-icon.png";
let nuevoPlaceHolder = "teclea un correo de educarex"
let nuevoServicio = "Nuevos Servicios"
let contenidoServicios = ["./img/chefs/chefs-1.jpg", "./img/chefs/chefs-2.jpg", "./img/chefs/chefs-3.jpg", "./img/chefs/chefs-4.jpg", "./img/chefs/chefs-5.jpg", "./img/chefs/chefs-6.jpg"]

const itemContenido = ["cuarto slash", "quinto slash", "sexto slash", "septimo slash"];
const autor = ["Lola", "Paca", "Berta", "Ramira"]
NuevoPrecio = ["Precio X", "Precio Y", "Precio Z"];
A = [20, 30, 50, 20];
B = [340, 345, 344, 320]
C = [30, 20, 30, 10]
D = [100, 200, 300, 400]

function inicio() {
    let navegacion = document.querySelectorAll("nav ul li a");
    console.log(navegacion);

    let logo = document.querySelector("[href='#myPage']");
    logo.textContent = "";
    let img = document.createElement("img");
    img.src = "./img/favicon.png"
    logo.appendChild(img);

    let nombre = document.querySelector("h1");
    nombre.textContent = "2ºDAW";

    let subtitulo = document.querySelector("div p");
    subtitulo.textContent = "Los Pitbulls de JavaScript";

    let servicios = document.querySelector("#services h2");
    servicios.textContent = "Nuevos servicios";

    let listaServicios = document.querySelectorAll("span ~ h4");
    console.log("Lista de servicios " + listaServicios);

    listaServicios.forEach(mostrarServicios);

    function mostrarServicios(item, indice) {
        item.textContent = Servicios[indice];
        let img = document.createElement("img");
        img.className = "";
        img.src = contenidoServicios[indice];
        item.appendChild(img);
    }

    // let portfolio = document.querySelector("#galeria img");
    // portfolio.forEach(mostrarPortFolio);

    // function mostrarPortFolio(item, indice) {
    //     item.src = imagenes[i];
    // }

    let listadoPrecios = document.querySelector("#pricing h2");
    listadoPrecios.textContent = "Listado de precios";

    let subtituloPrecio = document.querySelector("#pricing h4");
    subtituloPrecio.textContent = "Elige la forma de pago";

    let cajaPrecio = document.createElement("div");

    for (let i = 0; i < 3; i++) {

        cajaPrecio.innerHTML += "<div class='col-sm-4 col-xs-12'>" +
            "<div class='panel panel-default text-center'>" +
            " <div class='panel-heading'>" +
            "  <h1>" + NuevoPrecio[i] + "</h1>" +
            "</div>" +
            "<div class='panel-body'>" +
            "<p><strong>" + A[i] + "</strong> Euros</p>" +
            "<p><strong>" + B[i] + "</strong> Dolares</p>" +
            "<p><strong>" + C[i] + "</strong> Yenes</p>" +
            "<p><strong>" + D[i] + "</strong> </p>" +
            " <p><strong>" + D[i] + "</strong> Amet</p>" +
            " </div>" +
            "<div class='panel-footer'>" +
            " <h3>" + A[i] + "</h3>" +
            "  <h4>per month</h4>" +
            "<button class='btn btn-lg'>Sign Up</button>" +
            " </div>" +
            " </div>" +
            " </div>"
    }
    let contenedorPrecio = document.querySelector("#cardPrecios");
    contenedorPrecio.appendChild(cajaPrecio);


    teamDaw = ['Manuel', 'Mario', 'Mauro', 'Alvaro', 'Raul'];
    let enlacesDaw = ["http://mariojuarez.atwebpages.com/", "http://practicasmanuelbote.atwebpages.com/", "http://mariojuarez.atwebpages.com/",
        "http://practicasmanuelbote.atwebpages.com/", "http://practicasmanuelbote.atwebpages.com/"];

    navegacion.forEach(accion);

    function accion(item, indice) {
        item.textContent = teamDaw[indice];
        item.setAttribute("target", "_blank");
        item.href = enlacesDaw[indice];
    }
}