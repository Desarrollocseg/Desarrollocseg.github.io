document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los botones con la clase "btn-leer-mas"
    const buttons = document.querySelectorAll(".btn-leer-mas");

    // Recorre todos los botones y agrega el evento onclick
    buttons.forEach(function(button) {
        button.onclick = function() {
            toggleText(button);  // Llama a la función y pasa el botón actual
        };
    });
});

function toggleText(button) {
    // Encuentra el elemento .desplegar más cercano al botón que fue clicado
    const desplegar = button.previousElementSibling; // El div "desplegar" está justo antes del botón

    // Cambia entre mostrar y ocultar el contenido
    if (desplegar.style.display === "none" || desplegar.style.display === "") {
        desplegar.style.display = "block";  // Muestra el contenido
        button.textContent = "Leer menos";  // Cambia el texto del botón
    } else {
        desplegar.style.display = "none";  // Oculta el contenido
        button.textContent = "Leer más";  // Cambia el texto del botón
    }
}
