window.onload = inicio;

const notas = [];
const notasMedia = [0, 0, 0, 0];
const votosTotales = [0, 0, 0, 0];
const nameAlumnos = ["", "", ""];
let contNotasIguales = 0;
let representantes = [];

let caja1 = document.querySelector("#caja1");
let caja2 = document.querySelector("#caja2");
let caja3 = document.querySelector("#caja3");

let nombreAlumnoMediaAlta;

function inicio() {
    console.log("INICIO");

    resultadoElecciones();
}


function resultadoElecciones() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = cargar;
    function cargar() {
        if (this.readyState == 4 && this.status == 200) {
            var objeto = JSON.parse(this.responseText);
            objeto.forEach(recorrer);

            function recorrer(datos, index) {
                notas = [parseInt(datos.nota1), parseInt(datos.nota2), parseInt(datos.nota3)];
                let media = 0;

                for (let i = 0; i < notas.length; i++) {
                    media = media + notas[i];
                }
                notasMedia[index] = media;

                if (notas[0] >= 5 && notas[1] >= 5 && notas[2] >= 5) {
                    nameAlumnos.push(datos.alumno);
                }

                if (notas[0] == notas[1] == notas[2]) {
                    contNotasIguales++;
                }


            }

            let mediaAlta = -1;
            let posic = 0;
            for (let i = 0; i < notasMedia.length; i++) {
                if (notasMedia[i] > mediaAlta) {
                    mediaAlta = notasMedia[i];
                    posic = i;
                    nombreAlumnoMediaAlta = datos.alumno;
                }
            }
            caja1.innerHTML = " <h1>Apartado A</h1>" +
                "<p> El alumno con la media más alta es: " + nombreAlumnoMediaAlta + " con " + mediaAlta + "</p >";
            caja2.textContent = "Apartado B";
            for (let i = 0; i < nameAlumnos.length; i++) {
                caja2.innerHTML = "<p>" + nameAlumnos[i] + "</p>";
                caja2.textContent = nameAlumnos[i];
            }

            caja1.innerHTML = " <h1>Apartado C</h1>" +
                "<p> Alumnos con notas iguales: " + contNotasIguales + "</p >";
        }
    }
    xhr.open(
        "POST",
        "http://moralo.atwebpages.com/menuAjax/dam1/getDam1.php"
    );
    xhr.send();
}