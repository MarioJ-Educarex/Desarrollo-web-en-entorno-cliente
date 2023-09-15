window.addEventListener("load",inicio);

function inicio (){
    console.log("entro en js");
    document.getElementById("btn1").addEventListener("click",function1);
    document.getElementById("btn2").addEventListener("click",function2);
   // document.getElementById("btn2").onclick=function1
    document.getElementById("btn3").addEventListener("click",function3);
    document.getElementById("btn4").addEventListener("click",function4);
    document.getElementById("btn5").addEventListener("click",function5);
    document.getElementById("btn6").addEventListener("click",function6);

    function function1(){
        // alert("estoy en funcion 1");
        // console.log("Entrando en funcion 1");
        let numero1=Math.round(Math.random()*100);
        let caja1=document.getElementById("c1");
        caja1.innerText=numero1;
        caja1.style.backgroundColor="Red";
        caja1.style.color="white";
        caja1.style.fontSize="px";
        
// Otra forma de hacerlo
/*         with(document.getElementById("c1")){
            innerText=numero1;
            style.backgroundColor="Red";
            style.color="black";
            style.fontSize="px";
        } */
    }

    function function2(){
        const colores=["Red","Green","Yellow","Blue","Orange"];
        let indice=Math.round(Math.random()*4);
        console.log(indice);
        let caja2=document.getElementById("c2");
        console.log(caja2);
        caja2.innerText=indice;
        caja2.style.backgroundColor=colores[indice];
    }

    function function3(){
       let num1= parseInt(prompt("Introduzca un numero: "));
       let num2= parseInt(prompt("Introduzca otro numero: "));

       let caja3= document.getElementById("c3");
       caja3.innerText= (num1+num2);
       caja3.style.backgroundColor="Orange";
    }

    function function4(){
       let x= Math.round(Math.random()*10);
       let enc=false;
       let cont=0;
       let caja4= document.getElementById("c4");
       let y;
        do {
             y= parseInt(prompt("Elegir numero entre 1 y 10: "));

            if (x<y) {
                alert("PISTA: Es un numero mas pequeño");
                cont++;
            } else if (x>y) {
                alert("PISTA: Es un numero mas grande");
                cont++;
            } else {
                alert("Enhorabuena número encontrado");
                cont++;
                caja4.innerText= "INTENTOS: "+cont;


            }
            
        } while (x!=y && !enc);
       

    }

    function function5(){
        alert("estoy en funcion 5");
        console.log("Entrando en funcion 5");
    }

    function function6(){
        alert("estoy en funcion 6");
        console.log("Entrando en funcion 6");
    }
}