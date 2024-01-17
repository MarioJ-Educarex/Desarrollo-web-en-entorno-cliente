window.onload = inicio;

let partidoA = 0;
let partidoB = 0;
let partidoC = 0;
let partidoD = 0;
let votosPA;
let votosPB;
let votosPC;
let votosPD;

let provinciasA = [];
let provinciasB = [];
let provinciasC = [];
let provinciasD = [];

let votosTotalesA = 0;
let votosTotalesB = 0;
let votosTotalesC = 0;
let votosTotalesD = 0;

let ganadores = [];

function inicio() {
    console.log("Entro en inicio");

    obtenerRepresentantes();

}

function obtenerRepresentantes() {

    var cajaMostrarContenido = document.querySelector("#mostrarRepresentantes");
    var bloqueHtml = document.createElement("div");
    var xhr = new XMLHttpRequest;
    xhr.onreadystatechange = cargar;
    function cargar() {

        if (this.readyState == 4 && this.status == 200) {
            var objeto = JSON.parse(this.responseText);
            objeto.forEach(recorrer);
            function recorrer(datos, index) {
                votosPA = parseInt(datos.votosPA);
                votosPB = parseInt(datos.votosPB);
                votosPC = parseInt(datos.votosPC);
                votosPD = parseInt(datos.votosPD);
                if (votosPA > votosPB && votosPA > votosPC && votosPA > votosPD) {
                    partidoA += parseInt(datos.Representantes);
                    provinciasA.push(datos.nombreProvincia);
                    ganadores.push("PA");
                } else {
                    if (votosPB > votosPA && votosPB > votosPC && votosPB > votosPD) {
                        partidoB += parseInt(datos.Representantes);
                        provinciasB.push(datos.nombreProvincia);
                        ganadores.push("PB");

                    } else {
                        if (votosPC > votosPB && votosPC > votosPA && votosPC > votosPD) {
                            partidoC += parseInt(datos.Representantes);
                            provinciasC.push(datos.nombreProvincia);
                            ganadores.push("PC");

                        } else {
                            if (votosPD > votosPB && votosPD > votosPA && votosPD > votosPC) {
                                partidoD += parseInt(datos.Representantes);
                                provinciasD.push(datos.nombreProvincia);
                                ganadores.push("PD");

                            }
                        }
                    }
                }

                votosTotalesA += votosPA;
                votosTotalesB += votosPB;
                votosTotalesC += votosPC;
                votosTotalesD += votosPD;

            }

            bloqueHtml.innerHTML += "<div class='row'>" +
                "<div class='col-lg-12'> Partido A: " + partidoA + " representantes</div>" +
                "<div class='col-lg-12'> Partido B: " + partidoB + " representantes</div>" +
                "<div class='col-lg-12'> Partido C: " + partidoC + " representantes</div>" +
                "<div class='col-lg-12'> Partido D: " + partidoD + " representantes</div>" +
                "<div class='col-lg-12'> Partido A: " + provinciasA + "</div>" +
                "<div class='col-lg-12'> Partido B: " + provinciasB + "</div>" +
                "<div class='col-lg-12'> Partido C: " + provinciasC + "</div>" +
                "<div class='col-lg-12'> Partido D: " + provinciasD + "</div>" +
                "<div class='col-lg-12'> Partido A: " + votosTotalesA + " votos totales</div>" +
                "<div class='col-lg-12'> Partido B: " + votosTotalesB + " votos totales</div>" +
                "<div class='col-lg-12'> Partido C: " + votosTotalesC + " votos totales</div>" +
                "<div class='col-lg-12'> Partido D: " + votosTotalesD + " votos totales</div>" +
                "<div class='col-lg-12'> Ganadores: " + ganadores + "</div>";
            cajaMostrarContenido.appendChild(bloqueHtml);
        }

    }
    xhr.open("POST", "http://moralo.atwebpages.com/menuAjax/Provincias/getProvincias.php")
    xhr.send()
}