// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()

let dateTime = new Date().toLocaleTimeString("fr"); // recuperer l'heure locale et mettre les differentes valeurs dans un tableau
let time = dateTime.split(":");

//Stocker l'heure , minute , seconde  dans des varaiables

let hour = parseInt(time[0]);
let min = parseInt(time[1]); // Obtenir des int
let sec = parseInt(time[2]);

console.log(hour + " " + min + " " + sec);


// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
/*
let moveSec = (sec * 6);    //position de l'aiguille des secon
let moveMin = (min * 6 + (moveSec/60));
let moveHour = (hour * 30 + (moveMin/60));
*/

// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré


// Déplacer les aiguilles 
function demarrerLaMontre() {
    let dateTime = new Date().toLocaleTimeString("fr"); // initialiser la montre à l'heure d'ajourd'hui chaque secondes
    let time = dateTime.split(":"); 
    let hour = parseInt(time[0]);
    let min = parseInt(time[1]);
    let sec = parseInt(time[2]);
    let nTime = sec + 60 * min + 3600 * hour;  // Heure totale en secondes
    let moveSec = (nTime * 6); // mouvement de 6 degres par secondes
    let moveMin = ((nTime * 6)/ 60); // 0.1 deg par sec
    let moveHour = ((nTime * 6)/ 3600); // 0.0017 deg par sec
    console.log();

    AIGUILLEHR.setAttribute("transform", "rotate(" + moveHour + ")"); // ajouter le nombre de degres de rotation par secondes
    AIGUILLEMIN.setAttribute("transform", "rotate(" + moveMin + ")");
    AIGUILLESEC.setAttribute("transform", "rotate(" + moveSec + ")");

}
// Exercuter la fonction chaque second
setInterval(demarrerLaMontre, 1000);