window.onload = inicio;

const NUM_COLUMNAS = 2;
const NUM_CAJAS = 50;
const CAJAS_SORTEO = 6;
let vectorCajas = [];
let v_numeros = [];
const columnas = [];
const vectorColumnas = [];
let contAciertos = 0;
let currentCol = 1;

const numeros = {
  1: [],
  2: [],
  3: [],
  4: [],
  5: [],
  6: [],
  7: [],
  8: []
}
let isDisabledAllPanels = false
let btnJugar;
function inicio() {
  cuerpo = document.querySelector("body");
  contenedorP = document.createElement("div");
  contenedorP.className = "container";
  cuerpo.appendChild(contenedorP);

  btnJugar = document.createElement("button");
  btnJugar.textContent = "JUGAR";
  cuerpo.appendChild(btnJugar);
  btnJugar.onclick = jugar;
  btnJugar.disabled = true;

  let btnReset = document.createElement("button");
  btnReset.textContent = "RESETEAR";
  cuerpo.appendChild(btnReset);
  btnReset.onclick = reset;

  // let btnSiguiente = document.createElement("button");
  // btnSiguiente.textContent = "SIGUIENTE";
  // cuerpo.appendChild(btnSiguiente);
  // btnSiguiente.disabled = true;
  // btnSiguiente.onclick = nextStep;

  for (let i = 0; i < NUM_COLUMNAS; i++) {
    contenedorS = document.createElement("fieldset");
    contenedorS.className = "gallery";
    let leyenda = document.createElement("legend");
    leyenda.textContent = "Columna " + (i + 1);

    contenedorS.appendChild(leyenda);
    contenedorP.appendChild(contenedorS);

    let contRojos = 0;

    for (let x = 0; x < NUM_CAJAS; x++) {
      let caja = document.createElement("div");
      caja.className = `gallery div col-${i + 1}`;
      caja.textContent = x + 1;


      // if (i != 0) {
      //   contenedorS.classList.add("disabledDiv");
      // }

      contenedorS.appendChild(caja);
      columnas.push(caja);
      caja.onclick = marcar;

      function marcar($event) {
        // if (contRojos == 6) {
        // //   vectorCajas.forEach(accion);

        // //   function accion(item, index) {
        // //     if (item.style.backgroundColor == "red") {
        // //       console.log(item.textContent);
        // //       item.style.backgroundColor = "green";
        // //       v_numeros.slice(contRojos,1);
        // //     }
        //  // }
        // } else {
        //     vectorCajas.push(caja);
        //     console.log("Soy X "+x);
        //     v_numeros.push(x+1);
        //   caja.style.backgroundColor = "red";
        //   contRojos++;
        // }

        if (!checkIsDisabledElement($event.target) && !isDisabledAllPanels) {
          console.log('Puedo marcar')
          numeros[currentCol]
          if (numeros[currentCol].length < 6 && !numeros[currentCol].includes(x + 1)) {
            console.log("Entro en marcar");
            vectorCajas.push(caja);
            console.log("Soy X " + (x + 1));
            numeros[currentCol].push(x + 1);
            caja.style.backgroundColor = "red";
            caja.onclick = desmarcar;
            contRojos++;
            console.log(contRojos);

            if (contRojos == 6) {
              console.log("Final " + contRojos);
              console.log(numeros[currentCol].length);
              nextStep();
              // if (currentCol == 2 || currentCol == 1) {
              //   contenedorS.classList.remove("disabledDiv");
              // }
              //numeros[i].classList.add("disabledDiv");
              // btnSiguiente.disabled = false;
            }

          }
        }
      }

      function desmarcar($event) {
        btnSiguiente.disabled = true;
        console.log("Entro en desmarcar");

        // vectorCajas.forEach(accion);

        // function accion(item, index) {
        //   console.log("Entro en desmarcar bucle");
        //   if (item.style.backgroundColor == "red") {
        //     console.log("ITEM " + item.textContent);
        //     item.style.backgroundColor = "green";
        //     let n = parseInt(item.textContent);
        //     let posicion = v_numeros.indexOf(n);
        //     console.log("Posicion: " + posicion);
        //     v_numeros.slice(posicion, 1);
        //     contRojos--;
        //     caja.onclick = marcar;
        //   }
        // }
        if (!checkIsDisabledElement($event.target) && !isDisabledAllPanels) {
          if (caja.style.backgroundColor == "red") {
            console.log("ITEM " + caja.textContent);
            caja.style.backgroundColor = "green";
            let n = parseInt(caja.textContent);
            let posicion = numeros[currentCol].indexOf(n);
            console.log("Posicion: " + posicion);
            numeros[currentCol].splice(posicion, 1);
            contRojos--;
          }
          caja.onclick = marcar;
        }
      }
    }
    vectorColumnas.push(columnas);
  }
}

function jugar() {

  contAciertos = 0;

  let contenedorSorteo = document.createElement("div");
  contenedorSorteo.className = "gallery2";
  cuerpo.appendChild(contenedorSorteo);
  disableAllPanels();
  let vectorN = [];

  for (let i = 0; i < CAJAS_SORTEO; i++) {
    do {
      num = Math.ceil(Math.random() * 50);
    } while (vectorN.includes(num));

    vectorN.push(num);
    vectorN.sort();
    let box = document.createElement("div");
    box.className = "gallery2 div";
    box.textContent = num;
    contenedorSorteo.appendChild(box);
  }

  //vectorCajas.forEach(recorrido);
  let resultado = document.createElement("div");
  resultado.className = "gallery2 div";
  resultado.style.backgroundColor = "rgb(0,160,0)";
  contenedorSorteo.appendChild(resultado);
  console.log(numeros[currentCol]);
  console.log(vectorN);
  for (let i = 0; i < 6; i++) {
    for (const key in numeros) {
      if (Object.hasOwnProperty.call(numeros, key)) {
        const element = numeros[key];
        for (let j = 0; j < 6; j++) {

          if (element[i] == vectorN[j]) {
            contAciertos++;
          }
        }
      }
    }
  }
  //   function recorrido(item, index) {

  //     vectorN.forEach(accion2);

  //     function accion2(item2, index2) {

  //       if (item.textContent == item2.textContent) {
  //         console.log(item.textContent);
  //         contAciertos++;

  //       }

  //     //  resultado.textContent = cont;
  //     }

  //   }
  resultado.textContent = contAciertos;

  // --------------------------

  let contenedorBombo = document.createElement("div");
  contenedorBombo.className = "gallery2";
  cuerpo.appendChild(contenedorBombo);
  for (const key in numeros) {
    if (Object.hasOwnProperty.call(numeros, key)) {
      const element = numeros[key];
      for (let i = 0; i < element.length; i++) {
        let box = document.createElement("div");
        box.className = "gallery2 div";
        box.textContent = element[i];
        box.style.backgroundColor = "yellow";
        contenedorBombo.appendChild(box);

        if (vectorN.includes(element[i])) {
          box.style.backgroundColor = "red";
        }
      }
    }
  }
}

function reset() {
  // let resultado = prompt(
  //   "Elige la columna a resetear: - 0 todo \n - 1 columna 1 \n - 2 columna 2 \n - 3 columna 3"
  // );

  // if (resultado == 1) {
  //   vectorCajas.forEach(accion1);

  //   function accion1(item, index) {
  //     item.style.backgroundColor = "green";
  //   }
  //   v_numeros = [];
  // }


  // enableAllPanels();

  window.location.reload();

}

function nextStep() {
  if (currentCol < NUM_COLUMNAS + 1) {
    if (currentCol == NUM_COLUMNAS) {
      btnJugar.disabled = false;
    } else {
      currentCol++;
    }

    for (let index = 1; index <= NUM_COLUMNAS; index++) {
      if (index < currentCol) {
        const list = document.getElementsByClassName(`col-${index}`);
        for (const element of list) {
          element.style.opacity = 0.5;
        }
      }

    }
  }

}

function checkIsDisabledElement(element) {
  const classCol = element.classList[element.classList.length - 1]
  const elementCol = +classCol.replace('col-', '')

  return elementCol !== currentCol
}

function disableAllPanels() {
  for (let index = 1; index <= NUM_COLUMNAS; index++) {
    const list = document.getElementsByClassName(`col-${index}`);
    for (const element of list) {
      element.style.opacity = 0.5;
    }

  }
  isDisabledAllPanels = true;

}

function enableAllPanels() {
  console.log('test')

  for (let index = 1; index <= NUM_COLUMNAS; index++) {
    const list = document.getElementsByClassName(`col-${index}`);
    console.log('test', Object.hasOwnProperty.call(numeros, index), numeros, index)

    if (Object.hasOwnProperty.call(numeros, index)) {
      numeros[index] = []
    }
    console.log('test')
    for (const element of list) {
      element.style.opacity = 1;
      element.style.backgroundColor = "green";
      element.onclick = marcar;
    }
  }
  isDisabledAllPanels = false;

}