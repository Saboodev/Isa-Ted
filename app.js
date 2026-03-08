// Ajoutez cette fonction pour gérer le menu burger
function toggleMenu() {
    var navMenu = document.querySelector('nav');
    navMenu.classList.toggle('show');
}

//gestion compte-à-rebours
const dateMariage = new Date("September 26, 2026 00:00:00").getTime();

const compteur = setInterval(function(){

let maintenant = new Date().getTime();
let distance = dateMariage - maintenant;

let jours = Math.floor(distance / (1000*60*60*24));

document.getElementById("countdown").innerHTML =
jours + " jours avant le mariage";

},1000);