const menuToggle = document.getElementById('menuToggle'),
    menu = document.querySelector('.header__nav'),
    label = document.querySelector('.header__menu-button-sm-label');

menuToggle.addEventListener('change', () => {
    menu.classList.toggle('open');
});