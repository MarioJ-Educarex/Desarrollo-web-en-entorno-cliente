window.onload = inicio;

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