const icono = document.getElementById("hambur");
const ventana = document.getElementById("ventana");

icono.addEventListener("click", () => {
  ventana.classList.toggle("active-ventana");
  
});
