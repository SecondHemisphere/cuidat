document.addEventListener("DOMContentLoaded", function () {
  const acordeones = document.getElementsByClassName("acordeon");

  for (let i = 0; i < acordeones.length; i++) {
    acordeones[i].addEventListener("click", function () {
      this.classList.toggle("activo");
      const panel = this.nextElementSibling;

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });

    // Abre la primera sección por defecto
    if (i === 0) {
      acordeones[i].classList.add("activo");
      const panel = acordeones[i].nextElementSibling;
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }

  // Manejar enlaces rápidos con animación suave
  document.querySelectorAll('a[href^="#"]').forEach((enlace) => {
    enlace.addEventListener("click", function (evento) {
      evento.preventDefault();

      const idObjetivo = this.getAttribute("href");
      const elementoObjetivo = document.querySelector(idObjetivo);

      if (elementoObjetivo) {
        // Cerrar todos los acordeones primero
        for (let i = 0; i < acordeones.length; i++) {
          acordeones[i].classList.remove("activo");
          acordeones[i].nextElementSibling.style.maxHeight = null;
        }

        // Abrir el acordeón objetivo
        const acordeonObjetivo = elementoObjetivo.querySelector(".acordeon");
        if (acordeonObjetivo) {
          acordeonObjetivo.classList.add("activo");
          const panel = acordeonObjetivo.nextElementSibling;
          panel.style.maxHeight = panel.scrollHeight + "px";

          // Desplazamiento suave
          window.scrollTo({
            top: elementoObjetivo.offsetTop - 20,
            behavior: "smooth",
          });
        }
      }
    });
  });
});