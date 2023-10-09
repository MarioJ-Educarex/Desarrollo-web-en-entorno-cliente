window.addEventListener('load', inicio);

const ArrayImagenes = ['img/0.JPG', 'img/1.JPG', 'img/2.JPG', 'img/3.JPG', 'img/4.JPG', 'img/5.JPG', 'img/6.JPG', 'img/7.JPG'];
const ArrayFinal = [];
let primeraSeleccion = null;
let segundaSeleccion = null;
let contadorAciertos = 0;

// Obtener elementos del DOM


function inicio() {
  console.log("entra en inicio");

  const pantallaJ = document.getElementById('pantallaJuego');
  const resultado = document.getElementById('resultado');

  contadorAciertos = 0;
  crearPanel();

  function crearPanel() {
    const contenedor = document.createElement('div');
    contenedor.className = 'grid';

    // Mezclar las imágenes aleatoriamente
    const imagenesMezcladas = ArrayImagenes.concat(ArrayImagenes);
    for (let i = imagenesMezcladas.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [imagenesMezcladas[i], imagenesMezcladas[j]] = [imagenesMezcladas[j], imagenesMezcladas[i]];
    }

    // Crear las cajas con las imágenes
    for (let i = 0; i < imagenesMezcladas.length; i++) {
      const caja = document.createElement('div');
      caja.className = 'caja';
      const imagen = document.createElement('img');
      imagen.src = imagenesMezcladas[i];
      imagen.addEventListener('click', () => seleccionarImagen(imagen));
      caja.appendChild(imagen);
      contenedor.appendChild(caja);
    }

    pantallaJ.appendChild(contenedor);
  }

  function seleccionarImagen(imagen) {
    if (primeraSeleccion === null) {
      primeraSeleccion = imagen;
      primeraSeleccion.classList.add('seleccionada');
    } else if (segundaSeleccion === null) {
      segundaSeleccion = imagen;
      segundaSeleccion.classList.add('seleccionada');

      if (primeraSeleccion.src === segundaSeleccion.src) {
        contadorAciertos++;
        setTimeout(() => {
          primeraSeleccion.classList.add('acertada');
          segundaSeleccion.classList.add('acertada');
          primeraSeleccion.classList.remove('seleccionada');
          segundaSeleccion.classList.remove('seleccionada');
          primeraSeleccion = null;
          segundaSeleccion = null;

          // Verificar si se ha completado el juego
          if (contadorAciertos === ArrayImagenes.length) {
            alert('¡Has ganado!');
          }
        }, 500);
      } else {
        setTimeout(() => {
          primeraSeleccion.classList.remove('seleccionada');
          segundaSeleccion.classList.remove('seleccionada');
          primeraSeleccion = null;
          segundaSeleccion = null;
        }, 500);
      }
    }
  }

}

