window.onload = inicio;

var boolP = true;
var boolD = true;
function inicio() {
    obtenerPaises();
    obtenerDeportes();

    while (boolD && boolP) {

    }

    obtenerEquipos();


}
async function obtenerPaises() {
    console.log("entro en obtenerPaises");
    const url = " https://www.thesportsdb.com/api/v1/json/3/all_countries.php";
    var headers = {};

    const objeto = await fetch(url, {
        method: "GET",
        mode: 'cors',
        headers: headers
    });
    try {


        const data = await objeto.json();
        console.log(data);
        let contenedor = document.getElementById("pais");
        for (let i = 0; i < data.countries.length; i++) {
            contenedor.innerHTML +=
                `
<div>
<option value=${data.countries[i].name_en}>${data.countries[i].name_en}</option>

 </div>
`
        }

        boolP = false;

    } catch (error) {
        alert("obtenerPaises " + error);
    }
}
async function obtenerDeportes() {
    console.log("entro en obtenerDeportes");
    // const url = " https://www.thesportsdb.com/api/v1/json/3/all_leagues.php";
    const url = "deportes.json";
    var headers = {};
    const response = await fetch(url, {
        method: "GET",
        mode: 'cors',
        headers: headers
    });
    try {


        const data = await response.json();
        console.log(data);
        let contenedor = document.getElementById("deporte");
        for (let i = 0; i < data.sports.length; i++) {
            contenedor.innerHTML +=
                `
    <div>
    <option value="${data.sports[i].name}">${data.sports[i].name}</option>
    
     </div>
    `
        }


        boolD = false;
    } catch (error) {
        alert("obtenerDeportes " + error);
    }

}

async function obtenerEquipos() {
    console.log("entro en obtenerEquipos");
    // const url = "https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?s=VolleyBall&c=Portugal";
    let selectDeporte = document.getElementById("deporte");
    // let deporteSeleccionado = selectDeporte.options[selectDeporte.selectedIndex].value;

    let selectPais = document.getElementById("pais");
    // let paisSeleccionado = selectPais.options[selectPais.selectedIndex].value;

    // let deporte = "basketball";
    // let pais = "spain";

    alert("Deporte: " + selectDeporte.value);
    alert("Pais: " + selectPais.value);

    const url = "https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?s=" + selectDeporte.value + "&c=" + selectPais.value + "";
    var headers = {};

    const response = await fetch(url, {
        method: "GET",
        mode: 'cors',
        headers: headers
    });
    try {


        const data = await response.json();
        console.log(data);
        let contenedor = document.getElementById("contenido");
        contenedor.innerHTML = "";
        for (let i = 0; i < data.teams.length; i++)
            contenedor.innerHTML +=
                `
    <div>
    <img src="${data.teams[i].strTeamBadge}" width="200px"/>
     <p>${data.teams[i].strTeam}</p>
     </div>
    `
    } catch (error) {
        alert("No existe " + selectDeporte.value + " en " + selectPais.value + "   " + error);
    }
}