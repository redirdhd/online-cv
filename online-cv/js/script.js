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

const projektDobozok = document.querySelectorAll(".projekt");

projektDobozok.forEach((projekt) => {
  const gomb = projekt.querySelector(".gomb-projekt");
  const reszlet = projekt.querySelector(".projekt-reszlet");

  gomb.addEventListener("click", () => {
    reszlet.classList.toggle("rejtett-projekt");
  });
});



