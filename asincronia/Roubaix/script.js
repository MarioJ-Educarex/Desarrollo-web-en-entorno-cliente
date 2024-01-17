console.log("Sufrimiento");

let body = document.body;
let contenedorPrincipal = document.createElement("div");
contenedorPrincipal.className = "container-fluid";
body.appendChild(contenedorPrincipal);

function inicio() {
  let btn = document.getElementById("listar1");
  btn.onclick = function () {
    tabla.innerHTML = "";
    fetch('ParisRoubaix.json')
      .then(response => response.json())
      .then(datos => {
        console.table(datos);

        cargar(datos);
      });
  }
}

function cargar(datos) {
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

//Imagen1
let contenedorImagen1 = document.createElement("div");
contenedorImagen1.className = "imagenx";
let tituloImagen1 = document.createElement("h3");
tituloImagen1.textContent = "PARIX-ROUBAIX";
tituloImagen1.style.backgroundColor = "green";
//Cambiar color de letra
contenedorPrincipal.appendChild(contenedorImagen1);
contenedorImagen1.appendChild(tituloImagen1);
contenedorImagen1.style.backgroundImage = "url('img/bici1.jpg')";
let contenedorTexto1 = document.createElement("div");
contenedorTexto1.className = "p-3 bg-white text-dark";
contenedorPrincipal.appendChild(contenedorTexto1);
let elTexto1 = document.createElement("h4");
elTexto1.textContent =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque commodi autem ut debitis vitae aspernatur aliquid quae, magni id accusamus aut cumque harum reprehenderit repudiandae repellat officiis ratione amet soluta.";
elTexto1.style.backgroundColor = "green";
contenedorTexto1.appendChild(elTexto1);

// //Imagen2
// let contenedorImagen2 = document.createElement("div");
// contenedorImagen2.className = "imagenx imagen2";
// contenedorPrincipal.appendChild(contenedorImagen2);
// contenedorImagen2.style.backgroundImage = "url('img/bici2.jpg')";
// let contenedorTexto2 = document.createElement("div");
// contenedorTexto2.className = "p-3 bg-dark text-white";
// contenedorPrincipal.appendChild(contenedorTexto2);
// let elTexto2 = document.createElement("h4");
// elTexto2.style.backgroundColor = "green";
// elTexto2.textContent =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque commodi autem ut debitis vitae aspernatur aliquid quae, magni id accusamus aut cumque harum reprehenderit repudiandae repellat officiis ratione amet soluta.";
// contenedorTexto2.appendChild(elTexto2);

// //Imagen3
// let contenedorImagen3 = document.createElement("div");
// contenedorImagen3.className = "imagenx imagen3";
// contenedorPrincipal.appendChild(contenedorImagen3);
// contenedorImagen3.style.backgroundImage = "url('img/bici3.jpg')";
// let contenedorTexto3 = document.createElement("div");
// contenedorTexto3.className = "p-3 bg-dark text-white";
// contenedorPrincipal.appendChild(contenedorTexto3);
// let elTexto3 = document.createElement("h4");
// elTexto3.style.backgroundColor = "green";
// elTexto3.textContent =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque commodi autem ut debitis vitae aspernatur aliquid quae, magni id accusamus aut cumque harum reprehenderit repudiandae repellat officiis ratione amet soluta.";
// contenedorTexto3.appendChild(elTexto3);

// //Imagen4
// let contenedorImagen4 = document.createElement("div");
// contenedorImagen4.className = "imagenx imagen4";
// contenedorPrincipal.appendChild(contenedorImagen4);
// contenedorImagen4.style.backgroundImage = "url('img/bici4.jpg')";
// let contenedorTexto4 = document.createElement("div");
// contenedorTexto4.className = "p-3 bg-dark text-white";
// contenedorPrincipal.appendChild(contenedorTexto4);
// let elTexto4 = document.createElement("h4");
// elTexto4.style.backgroundColor = "green";
// elTexto4.textContent =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque commodi autem ut debitis vitae aspernatur aliquid quae, magni id accusamus aut cumque harum reprehenderit repudiandae repellat officiis ratione amet soluta.";
// contenedorTexto4.appendChild(elTexto4);

// //Imagen5
// let contenedorImagen5 = document.createElement("div");
// contenedorImagen5.className = "imagenx imagen5";
// contenedorPrincipal.appendChild(contenedorImagen5);
// contenedorImagen5.style.backgroundImage = "url('img/bici5.jpg')";
// let contenedorTexto5 = document.createElement("div");
// contenedorTexto5.className = "p-3 bg-dark text-white";
// contenedorPrincipal.appendChild(contenedorTexto5);
// let elTexto5 = document.createElement("h4");
// elTexto5.style.backgroundColor = "green";
// elTexto5.textContent =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque commodi autem ut debitis vitae aspernatur aliquid quae, magni id accusamus aut cumque harum reprehenderit repudiandae repellat officiis ratione amet soluta.";
// contenedorTexto5.appendChild(elTexto5);

// //Imagen6
// let contenedorImagen6 = document.createElement("div");
// contenedorImagen6.className = "imagenx imagen6";
// contenedorPrincipal.appendChild(contenedorImagen6);
// contenedorImagen6.style.backgroundImage = "url('img/bici6.jpg')";
// let contenedorTexto6 = document.createElement("div");
// contenedorTexto6.className = "p-3 bg-dark text-white";
// contenedorPrincipal.appendChild(contenedorTexto6);
// let elTexto6 = document.createElement("h4");
// elTexto6.style.backgroundColor = "green";
// elTexto6.textContent =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque commodi autem ut debitis vitae aspernatur aliquid quae, magni id accusamus aut cumque harum reprehenderit repudiandae repellat officiis ratione amet sit amet consectetur adipisicing elit. Neque commodi autem ut debitis vitae aspernatur aliquid quae, magni id accusamus aut cumque harum reprehenderit repudiandae repellat officiis ratione amet soluta.";
// contenedorTexto6.appendChild(elTexto6);

// //Imagen7
// let contenedorImagen7 = document.createElement("div");
// contenedorImagen7.className = "imagenx imagen7";
// contenedorPrincipal.appendChild(contenedorImagen7);
// contenedorImagen7.style.backgroundImage = "url('img/bici7.jpg')";
// let contenedorTexto7 = document.createElement("div");
// contenedorTexto7.className = "p-3 bg-dark text-dark";
// contenedorPrincipal.appendChild(contenedorTexto7);
// let elTexto7 = document.createElement("h4");
// elTexto7.style.backgroundColor = "green";
// elTexto7.textContent =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque commodi autem ut debitis vitae aspernatur aliquid quae, magni id accusamus aut cumque harum reprehenderit repudiandae repellat officiis ratione amet sit amet consectetur adipisicing elit. Neque commodi autem ut debitis vitae aspernatur aliquid quae, magni id accusamus aut cumque harum reprehenderit repudiandae repellat officiis ratione amet soluta.";
// contenedorTexto7.appendChild(elTexto7);

// //Imagen8
// let contenedorImagen8 = document.createElement("div");
// contenedorImagen8.className = "imagenx imagen8";
// contenedorPrincipal.appendChild(contenedorImagen8);
// contenedorImagen8.style.backgroundImage = "url('img/bici1.jpg')";
// let contenedorTexto8 = document.createElement("div");
// contenedorTexto8.className = "p-3 bg-dark text-dark";
// contenedorPrincipal.appendChild(contenedorTexto8);
// let elTexto8 = document.createElement("h4");
// elTexto8.style.backgroundColor = "green";
// elTexto8.textContent =
//   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque commodi autem ut debitis vitae aspernatur aliquid quae, magni id accusamus aut cumque harum reprehenderit repudiandae repellat officiis ratione amet sit amet consectetur adipisicing elit. Neque commodi autem ut debitis vitae aspernatur aliquid quae, magni id accusamus aut cumque harum reprehenderit repudiandae repellat officiis ratione amet soluta.";
// contenedorTexto8.appendChild(elTexto8);
