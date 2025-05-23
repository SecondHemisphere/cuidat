document.addEventListener('DOMContentLoaded', function() {
    const botonMenu = document.querySelector('.boton-menu');
    const menu = document.querySelector('.navegacion .menu');

    if (botonMenu && menu) {
        botonMenu.addEventListener('click', function() {
            menu.classList.toggle('active');
        });
    }
});