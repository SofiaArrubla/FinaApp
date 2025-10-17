//BLOQUE: JAVASCRIPT PARA EL MENÚ
//Funcionalidad del menú hamburguesa

document.addEventListener('DOMContentLoaded', function(){
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navToggleLines = document.querySelectorAll('.nav__toggle-line');

    //Evento click para el boton hamburguesa
    navToggle.addEventListener('click', function(){
        //Alternar clase activa en el menú
        navMenu.classList.toggle('nav__menu--active');

        //Alternar clases activas en las lineas del hamburguesa
        navToggleLines[0].classList.toggle('nav__toggle-line--top-active');
        navToggleLines[1].classList.toggle('nav__toggle-line--middle-active');
        navToggleLines[2].classList.toggle('nav__toggle-line--bottom-active');
    })
})