// Cuando la ventana se carga por completo, se llama a la función "inicio".
window.addEventListener('load', inicio);

// Array de rutas de imágenes para el juego.
const ArrayImagenes = ['img/0.JPG', 'img/1.JPG', 'img/2.JPG', 'img/3.JPG', 'img/4.JPG', 'img/5.JPG', 'img/6.JPG', 'img/7.JPG', 'img/ok.png'];

// Array que se utilizará para el seguimiento de las imágenes emparejadas.
const ArrayFinal = [];

function inicio() {
  console.log("entra en inicio");

  // Obtener referencias a elementos del DOM.
  const pantallaJ = document.getElementById("pantallaJuego");
  pantallaJ.className = "grid"; // Asignar una clase CSS "grid" a pantallaJ para aplicar estilos.
  const resultado = document.getElementById("resultado");

  // Declaración de variables locales.
  let caja1; // Para almacenar la primera imagen seleccionada en un par.
  let contadorAciertos = 0; // Para llevar la cuenta de los aciertos.
  let temp; // Temporizador para mostrar imágenes temporalmente.
  let pararClick = false; // Para evitar más selecciones mientras se muestran imágenes.
  let imagenesEmparejadas = []; // Para mantener un seguimiento de las imágenes emparejadas.

  // Llamada a la función para crear el panel de juego.
  crearPanel();

  // Función para crear el panel de juego.
  function crearPanel() {
    crearOrden(); // Llamar a la función para crear un orden aleatorio de imágenes.

    let contComprobar = 0; // Variable para llevar el control de la cantidad de imágenes seleccionadas.

    // Bucle para crear las cajas de imágenes en el tablero.
    for (let i = 0; i < 16; i++) {
      let caja = document.createElement("img"); // Crear un elemento <img> para cada caja.
      caja.className = ArrayFinal[i]; // Asignar una clase CSS basada en el número del ArrayFinal.
      caja.src = "img/question.png"; // Establecer la imagen de pregunta como imagen predeterminada.
      pantallaJ.appendChild(caja); // Agregar la caja al elemento pantallaJ en el DOM.

      // Agregar un evento de clic a cada caja.
      caja.addEventListener("click", comprobar);

      // Función para manejar el clic en una caja.
      function comprobar() {
        // Comprobar si el clic debe ser manejado o ignorado.
        if (pararClick == false && caja.className != 8 && !imagenesEmparejadas.includes(caja.className)) {
          caja.src = ArrayImagenes[caja.className]; // Mostrar la imagen correspondiente a la clase de la caja.

          // Comprobar si es la primera o segunda selección en un par.
          if (contComprobar == 0) {
            caja1 = caja;
            contComprobar++;
          } else {
            pararClick = true; // Evitar clics adicionales mientras se procesa el par.

            var n1 = caja1.className;
            var n2 = caja.className;

            if (n1 == n2) {
              // Las imágenes son iguales.
              temp = setInterval(cargar, 1000);

              // Función para cargar las imágenes de acierto y actualizar los puntos.
              function cargar() {
                caja.src = "img/ok.png";
                caja1.src = "img/ok.png";
                contadorAciertos++;
                cargarPuntos();
                clearInterval(temp); // Detener el temporizador.
                pararClick = false; // Permitir clics nuevamente.
                caja.className = 8; // Marcar la caja como emparejada.
                caja1.className = 8; // Marcar la primera caja como emparejada.
                imagenesEmparejadas.push(n1); // Agregar la imagen emparejada al seguimiento.
              }
            } else {
              // Las imágenes son diferentes.
              temp = setInterval(cargar, 1000);

              // Función para cargar las imágenes de pregunta nuevamente.
              function cargar() {
                caja.src = "img/question.png";
                caja1.src = "img/question.png";
                clearInterval(temp); // Detener el temporizador.
                pararClick = false; // Permitir clics nuevamente.
              }
            }
            contComprobar = 0; // Restablecer el contador para la próxima selección.
          }

          // Función para actualizar el marcador de puntos en el DOM.
          function cargarPuntos() {
            resultado.textContent = "Puntos: " + contadorAciertos;
          }
        }
      }
    }
  }

  // Función para crear un orden aleatorio de números del 0 al 7 dos veces repetidos.
  function crearOrden() {
    let array1 = [];
    let array2 = [];
    let num1;
    let num2;

    for (let i = 0; i < 8; i++) {
      do {
        num1 = Math.round(Math.random() * 7);
      } while (array1.includes(num1));
      array1.push(num1);

      do {
        num2 = Math.round(Math.random() * 7);
      } while (array2.includes(num2));
      array2.push(num2);
    }

    // Copiar los elementos de array1 y array2 al ArrayFinal.
    array1.forEach(function (item, indice) {
      ArrayFinal.push(item);
    });
    array2.forEach(function (item, indice) {
      ArrayFinal.push(item);
    });

    // Mezclar aleatoriamente los elementos en ArrayFinal.
    for (let i = ArrayFinal.length - 1; i > 0; i--) {
      var j = Math.round(Math.random() * (i + 1));
      [ArrayFinal[i], ArrayFinal[j]] = [ArrayFinal[j], ArrayFinal[i]];
    }
  }
}
