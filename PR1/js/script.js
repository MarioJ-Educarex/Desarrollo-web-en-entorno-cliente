console.log("entro en javascript")
//La función inicio es llamada por el objeto window (la ventana del navegador)
// cuando termine de cargar (load) todo el DOM HTML
// Funciones utiles de windows: alert, prompt, confirm
window.addEventListener("load",inicio);
window.onload=inicio;

function inicio (){
 // alert("estoy en la función inicio");
 // prompt("Teclea tu nombre");

 // se guarda en una variable en js el valor completo del objeto cuyo id es etiqueta1
 
 function cargarAleatorio(){
    let primeraEtiqueta = document.getElementById("etiqueta1");
    let segundaEtiqueta = document.getElementById("etiqueta2");
   
    primeraEtiqueta.textContent=Math.round(Math.random()*100);
    segundaEtiqueta.textContent=Math.round(Math.random()*100);
 }

 // identificar el objeto de tipo button cuyo id es bto1 y lo guardamos en la variable recargar
 let recargar= document.getElementById("bto1");
 // generar un evento de tipo click simple sobre el button de id="bto1"
recargar.addEventListener("click",accion1); //dblclick

function accion1(){
    console.log("recargando randoms");
    cargarAleatorio();
}

// Otra forma de cargar eventos
let boton2= document.getElementById("bto2");
boton2.onclick = accion2;

// generar arrays de componentes html
const listaElementosLi=document.getElementsByTagName("li")
console.log(listaElementosLi);

function accion2(){
    console.log("entro en el segundo evento");
    for(let item of listaElementosLi){
        item.style.color="Black";
        console.log(item);
    }
}

// Boton 3
let boton3= document.getElementById("bto3");
boton3.onclick = accion2;

boton3.onclick = accion3;

function accion3(){
    console.log("entro en el tercer evento");
    for(let i of listaElementosLi){
        i.textContent=Math.round(Math.random()*10);
        i.style.color="Black";
        console.log(i);
    }
}

// Boton 4
// Identificar el boton
let boton4= document.getElementById("bto4");
// evento sobre el boton 4
boton4.addEventListener("click",accion4); //dblclick

 function accion4(){
    console.log("entro en el cuarto evento");
    for(let i of listaElementosLi){
        let numero = Math.round(Math.random()*1000);
        i.textContent= numero;

        if(numero>500){
            i.style.color="Red";
        } else{
            i.style.color="Blue";
        }
        //console.log(i);
    }
}
}