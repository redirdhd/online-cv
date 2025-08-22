function changeBg() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}

function visibility1() {
  var x = document.getElementById("visible1");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

const projektDobozok = document.querySelectorAll(".projekt");

projektDobozok.forEach((projekt) => {
  const gomb = projekt.querySelector(".gomb-projekt");
  const reszlet = projekt.querySelector(".projekt-reszlet");

  gomb.addEventListener("click", () => {
    reszlet.classList.toggle("rejtett-projekt");
  });
});