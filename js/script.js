function changeBg() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

const projektDobozok = document.querySelectorAll(".projekt");

projektDobozok.forEach((projekt) => {
  const gomb = projekt.querySelector(".gomb-projekt");
  const reszlet = projekt.querySelector(".projekt-reszlet");

  gomb.addEventListener("click", () => {
    reszlet.classList.toggle("rejtett-projekt");
  });
});

