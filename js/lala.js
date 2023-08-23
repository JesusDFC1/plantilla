const closeButton = document.getElementById("closeButton");
const modal = document.getElementById("modal");

// Mostrar la ventana modal automáticamente al cargar la página
modal.style.display = "flex";

closeButton.addEventListener("click", () => {
  modal.style.display = "none";


  // Redirigir al inicio de la página
  window.location.href = "inicio.html"; // Puedes cambiar "#" por la URL de tu página de inicio
});




