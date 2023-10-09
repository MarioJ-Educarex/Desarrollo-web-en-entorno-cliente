window.onload = inicio;

function inicio() {
    let images = document.querySelectorAll("img");
    console.log(images);

    let temporizador = setInterval(tiempo, 500);

    function tiempo() {
        images.forEach(accion);
        function accion(item, inice) {
            let nr = Math.ceil(Math.random() * 3);
            let imr = Math.ceil(Math.random() * 5);
            item.className = "borde" + nr;
            item.src = "img/img" + imr + ".jpg";
        }
    }

}