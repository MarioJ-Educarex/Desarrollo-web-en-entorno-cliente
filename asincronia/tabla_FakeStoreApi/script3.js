window.onload = inicio;

let tabla = document.querySelector("#tabla1");
tabla.className = "table table-bordered table-striped"

function inicio() {
  let btn = document.getElementById("listar1");
  btn.onclick = function () {
    tabla.innerHTML = "";
    fetch('https://fakestoreapi.com/products')
      // fetch('http://camacho.atwebpages.com/jumbotronAleatorio/getImagenes.php')
      .then(response => response.json())
      .then(datos => {
        console.table(datos);

        cargarTabla(datos);
      });
  }
}
function cargarTabla(datos) {
  console.table("metadatos: " + Object.keys(datos[0]));

  let cabecera = document.createElement("thead");
  let cuerpo = document.createElement("tbody");
  cabecera.className = "thead-dark";
  let tr = document.createElement("tr");
  // tr.className = "table-striped";
  cabecera.appendChild(tr);

  let vectorMetadatos = Object.keys(datos[0]);

  for (let i = 0; i < vectorMetadatos.length; i++) {
    console.log(vectorMetadatos[i]);

    let th = document.createElement("th");
    let sp = document.createElement("span");
    sp.textContent = vectorMetadatos[i];
    th.appendChild(sp);
    tr.appendChild(th);

  }

  cabecera.appendChild(tr);
  tabla.appendChild(cabecera);

  datos.forEach(recorrer);
  function recorrer(item, index) {
    let fila = document.createElement("tr");

    for (let j = 0; j < vectorMetadatos.length; j++) {
      let celda = document.createElement("td");
      let sp2 = document.createElement("span");

      let campo = vectorMetadatos[j];

      if (campo == "image" || campo == "imagen") {
        let img = document.createElement("img");
        img.src = item[campo];
        img.style.width = "100%";
        celda.appendChild(img);
        fila.appendChild(celda);
        cuerpo.appendChild(fila);
        tabla.appendChild(cuerpo);
      } else {
        sp2.textContent = item[campo];
      }

      celda.appendChild(sp2);
      fila.appendChild(celda);
      cuerpo.appendChild(fila);
      tabla.appendChild(cuerpo);
    }

  }

}