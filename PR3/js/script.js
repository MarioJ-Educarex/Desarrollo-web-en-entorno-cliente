window.addEventListener("load", inicio);

function inicio() {
  console.log("entro en js");
  document.getElementById("btn1").addEventListener("click", function1);
  document.getElementById("btn2").addEventListener("click", function2);
  // document.getElementById("btn2").onclick=function1
  document.getElementById("btn3").addEventListener("click", function3);
  document.getElementById("btn4").addEventListener("click", function4);
  document.getElementById("btn5").addEventListener("click", function5);
  document.getElementById("btn6").addEventListener("click", function6);
  document.getElementById("btn7").addEventListener("click", function7);
  document.getElementById("btn8").addEventListener("click", function8);

  function function1() {
    // alert("estoy en funcion 1");
    // console.log("Entrando en funcion 1");
    let numero1 = Math.round(Math.random() * 100);
    let caja1 = document.getElementById("c1");
    caja1.innerText = numero1;
    caja1.style.backgroundColor = "Red";
    caja1.style.color = "white";
    caja1.style.fontSize = "px";

    // Otra forma de hacerlo
    /*         with(document.getElementById("c1")){
            innerText=numero1;
            style.backgroundColor="Red";
            style.color="black";
            style.fontSize="px";
        } */
  }

  function function2() {
    const colores = ["Red", "Green", "Yellow", "Blue", "Orange"];
    let indice = Math.round(Math.random() * 4);
    console.log(indice);
    let caja2 = document.getElementById("c2");
    console.log(caja2);
    caja2.innerText = indice;
    caja2.style.backgroundColor = colores[indice];
  }

  function function3() {
    /* let vectorCajas=document.getElementsByClassName("caja");
    setInterval(accionRanmdom) */

    let vectorCajas = document.getElementsByClassName("caja");
    setInterval(accionRanmdom, 1000);

    function accionRanmdom() {

      for (const iterator of vectorCajas) {
        let posicion = Math.round(Math.random() * 50);
        console.log(vectorCajas[posicion]);
        iterator.textContent = posicion;
      }

    }

  }

  function function4() {
    let vectorCajas = document.getElementsByClassName("caja");
    vectorColores = ["Red", "Blue", "Green", "Yellow", "Orange", "Pink"];
    intervalo2 = setInterval(cambioColores, 1000);

    function cambioColores() {

      for (const iterator of vectorCajas) {
        let posicion = Math.round(Math.random() * 5);
        console.log(vectorColores[posicion]);
        iterator.style.backgroundColor = vectorColores[posicion];
      }

    }

  }

  function function5() {
    console.log("detener todos los temporizadores");
    clearInterval(intervalo2);
  }

  function function6() {
    let btn6 = document.getElementById("btn6");

    btn6.disabled = true;
    let reloj = document.getElementById("c1");
    let segundos = 10;
    let countDown = setInterval(cuentaAtras, 1000);

    function cuentaAtras() {

      reloj.textContent = segundos;


      if (segundos == 0) {
        btn6.disabled = false;
        clearInterval(countDown);

      }

      segundos--;
    }

  }
  var posicion1 = 0;
  var posicion2 = 0;
  var puntuacion = 0;

  function function7() {
    let caja1 = document.getElementById("c1");
    let caja2 = document.getElementById("c2");
    let caja3 = document.getElementById("c3");
    vectorColores = ["Red", "Blue", "Green", "Yellow", "Orange", "Pink"];
    interval1 = setInterval(cambiaColor, 1000);
    tiempo = setInterval(cuentaAtras, 1000);
    let segundos = 15;
    caja3.textContent = segundos;
    btn7.disabled = true;

    document.getElementById("c4").innerText = "PUNTOS: " + puntuacion;

    function cuentaAtras() {
      if (segundos == 0) {
        btn7.disabled = false;
        clearInterval(tiempo);
        clearInterval(interval1);
        btn8.disabled = true;
      } else {
        segundos--;
        caja3.textContent = segundos;
      }

    }

    function cambiaColor() {
      posicion1 = Math.round(Math.random() * 5);
      posicion2 = Math.round(Math.random() * 5);
      caja1.style.backgroundColor = vectorColores[posicion1];
      caja2.style.backgroundColor = vectorColores[posicion2];
    }
  }

  function function8() {
    let caja4 = document.getElementById("c4");

    if (posicion1 == posicion2) {
      caja4.innerText = "PUNTOS: " + (puntuacion += 1);
    } else if (puntuacion > 0) {
      caja4.innerText = "PUNTOS: " + (puntuacion -= 1);
    }
  }
}
