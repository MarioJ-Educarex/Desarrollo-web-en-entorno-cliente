window.onload = inicio;

function inicio() {
    let images = document.querySelectorAll("img");
    console.log(images);

    let temporizador = setInterval(tiempo, 500);

    function tiempo() {
        images.forEach(accion);
        function accion(item, inice) {
            let nr = Math.ceil(Math.random() * 3);
            item.className = "borde" + nr;
        }
    }

}