window.onload = inicio;


function inicio() {
    console.log("Bienvenido a inicio");

    let btnMov = document.getElementById("mov");

    btnMov.onclick = mover;

    const componentes = [];

    let cuerpo = document.querySelector("body");
    let contenedorPrincipal = document.createElement("div");
    let contenedorTodos = document.createElement("fieldset");
    let contenedorAzul = document.createElement("fieldset");
    let contenedorRojo = document.createElement("fieldset");
    let contenedorVerde = document.createElement("fieldset");
    let contenedorNaranja = document.createElement("fieldset");

    let leyendaTodos = document.createElement("legend");
    let leyendaAzul = document.createElement("legend");
    let leyendaRojo = document.createElement("legend");
    let leyendaVerde = document.createElement("legend");
    let leyendaNaranja = document.createElement("legend");

    leyendaTodos.textContent = "TODOS";
    leyendaAzul.textContent = "AZULES";
    leyendaVerde.textContent = "VERDES";
    leyendaRojo.textContent = "ROJOS";
    leyendaNaranja.textContent = "NARANJAS";

    contenedorTodos.appendChild(leyendaTodos);
    contenedorAzul.appendChild(leyendaAzul);
    contenedorVerde.appendChild(leyendaVerde);
    contenedorRojo.appendChild(leyendaRojo);
    contenedorNaranja.appendChild(leyendaNaranja);

    contenedorPrincipal.appendChild(contenedorTodos);
    contenedorPrincipal.appendChild(contenedorAzul);
    contenedorPrincipal.appendChild(contenedorVerde);
    contenedorPrincipal.appendChild(contenedorRojo);
    contenedorPrincipal.appendChild(contenedorNaranja);

    cuerpo.appendChild(contenedorPrincipal);

    contenedorPrincipal.className = "container";
    contenedorTodos.className = "gallery";

    const colores = ["Red", "Green", "Blue", "Orange"];
    const coloresT = ["Rojo", "Verde", "Azul", "Naranja"];

    for (let i = 0; i < 20; i++) {
        let num1 = Math.round(Math.random() * 4);

        let cajaColor = document.createElement("div");
        cajaColor.textContent = coloresT[num1];
        cajaColor.style.backgroundColor = colores[num1];
        cajaColor.className = "gallery div";

        componentes.push(cajaColor);
        contenedorTodos.appendChild(cajaColor);

    }

    function mover() {
        componentes.forEach(accion);

        function accion(item, indice) {
            console.log(item.style.backgroundColor);

            switch (item.style.backgroundColor) {
                case "orange":
                    contenedorNaranja.appendChild(item);
                    break;
                case "blue":
                    contenedorAzul.appendChild(item);
                    break;
                case "red":
                    contenedorRojo.appendChild(item);
                    break;
                case "green":
                    contenedorVerde.appendChild(item);
                    break;

                default:
                    break;
            }

        }
    }



}