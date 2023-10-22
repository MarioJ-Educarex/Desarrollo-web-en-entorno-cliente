window.addEventListener("load", inicio); /*windows.onload=inicio*/

function inicio() {
  console.log("entro en js");
  const colores = ["#FF0000", "#0000FF", "#00FF00", "#FFFF00"];
  const nombres = ["Red", "Blue", "Green", "Yellow"];

  var btnJugar = document.getElementById("jugar");
  btnJugar.onclick = empezar;
  let btnParar = document.getElementById("parar").addEventListener("click", terminar);
  let caja = document.getElementById("fondo");

  let spTiempo = document.getElementById("spTiempo");
  let spPuntos = document.getElementById("spPuntos");
  var tiempo = 0;
  var puntos = 0;

  var contadorSegundos;
  function empezar() {
    contadorSegundos = 30;
    btnJugar.disabled = true;
    tiempo = setInterval(juego, 1000);

  }

  function juego() {
    //  let caja = document.getElementById("fondo");
    let num1 = Math.round(Math.random() * 3);
    let num2 = Math.round(Math.random() * 3);

    caja.style.backgroundColor = colores[num1];
    caja.textContent = " " + nombres[num2];

    //document.getElementsByTagName("p").textContent = nombres[num2];
    document.getElementsByTagName("p").textContent = nombres[num2];
    spTiempo.textContent = "Tiempo: " + contadorSegundos;

    if (contadorSegundos == 0) {
      clearInterval(tiempo);
      btnJugar.disabled = false;
    } else {
      contadorSegundos--;
    }

    caja.onclick = comprobar;

    function comprobar() {
      if (num1 == num2) {
        puntos++;
        spPuntos.textContent = "Puntos: " + puntos;
      } else {
        if (puntos > 0) {
          puntos--;
          spPuntos.textContent = "Puntos: " + puntos;
        }

      }
    }

  }

  function terminar() {
    puntos = 0;
    contadorSegundos = 30;
    spPuntos.textContent = "Puntos: " + 0;
    spTiempo.textContent = "Tiempo: " + contadorSegundos;
    clearInterval(tiempo);
    btnJugar.disabled = false;
  }
}
