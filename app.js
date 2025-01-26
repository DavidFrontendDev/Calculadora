const pantalla = document.querySelector("input");
const botones = document.querySelectorAll("button");
botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    let valorBoton = boton.textContent;
    try {
      if (valorBoton === "0" && pantalla.value === "") {
        return; // Saltamos este caso.
      } else if (valorBoton === "." && pantalla.value === "") {
        return; // Saltamos este caso.
      } else if (valorBoton === "AC") {
        pantalla.value = "";
      } else if (valorBoton === "←") {
        pantalla.value = pantalla.value.slice(0, -1);
      } else if (valorBoton === "=") {
        pantalla.value = eval(pantalla.value);
      } else {
        pantalla.value += valorBoton;
      }
    } catch {
      pantalla.value = "Error";
    }
  });
});
