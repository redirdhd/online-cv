console.log("Helló, Gergely Dávid vagyok!");

const nevem = "Gergely Dávid";
console.log(nevem);

let nev = "Gergely Dávid-Redi"
let szakma = "Frontend Fejlesztő"

console.log("Név: " + nev);
console.log("Szakma: " +  szakma)

let tapasztalat = 1; //év

if (tapasztalat >= 2) {
    console.log("Haladó szintű vagy");
} else if (tapasztalat === 1) {
    console.log("Már van alapod, fejélődsz!");
} else {
    console.log("Most kezdted hajrá");
}

let pontszam = 85;
if (pontszam >= 90) {
    console.log("Kiváló");
} else if (pontszam >= 70) {
    console.log("Elég jó")
} else { 
    console.log("Gyakorlás szükséges")
}

function gameChange() {
    let gameType = document.getElementById("gameType")
gameType.textContent = "Kedvenc Játékom a Monster Hunter Franchise"
gameType.style.color = "#2cb"
}

function megmutat() {
    const reszlet = document.getElementById("reszlet");
    reszlet.classList.toggle("lathatatlan")
}