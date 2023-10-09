window.onload = inicio;

function inicio() {
    let enlaces = document.querySelectorAll("a");
    console.log(enlaces);


    var doe = 0;
    var pt = 0;

    enlaces.forEach(accion);

    function accion(item, indice) {
        if (item.href.includes("doe")) {
            doe++;
        }

        if (item.href.includes(".pt")) {
            pt++;
        }
    }

    console.log("DOE: " + doe);
    console.log("Dominio portugal: " + pt);

}