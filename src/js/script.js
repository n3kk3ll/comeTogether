const menuToggle = document.getElementById('menuToggle'),
    menu = document.querySelector('.header__nav'),
    headerOverlay = document.querySelector('.header__overlay'),
    label = document.querySelector('.header__menu-button-sm-label'),
    btnUp = document.querySelector('.pageup');

function menuOpen () {
    menu.classList.toggle('open');
    document.body.style.overflow = 'hidden';
    if (menuToggle.checked === false) {
        document.body.style.overflow = 'visible';
    }
}

function menuClose () {
    menu.classList.remove('open');
    menuToggle.checked = false;
    document.body.style.overflow = 'visible';
}

function showScrollButton () {
    if (window.scrollY >= 1000) {
        btnUp.style.visibility = 'visible';
        btnUp.style.opacity = 1;
        btnUp.style.transition = 'opacity .5s ease';
        headerOverlay.style.opacity = 1;
    } else {
        btnUp.style.visibility = 'hidden';
        btnUp.style.opacity = 0;
        headerOverlay.style.opacity = 0;
    }
}

menuToggle.addEventListener('input', () => {
    menuOpen();
});

window.addEventListener('scroll', () => {
    showScrollButton();
});