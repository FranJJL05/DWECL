const btn = document.getElementById("prueba");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

const cambiarColorFondo = btn.addEventListener("click", () => {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
});


(function iniciar(){
    cambiarColorFondo;

})();