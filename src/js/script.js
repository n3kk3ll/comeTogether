const menuToggle = document.getElementById('menuToggle'),
    menu = document.querySelector('.header__nav'),
    label = document.querySelector('.header__menu-button-sm-label'),
    overlay = document.querySelector('.overlay'),
    swiper = new Swiper('.carousel__slider', {
        navigation: {
            nextEl: document.querySelector('.carousel__controls-next'),
            prevEl: document.querySelector('.carousel__controls-prev'),
        },
        slidesPerView: 1.15,
        spaceBetween: 60,
        loop: true,
        autoHeight: true,
        watchOverflow: true,
    });

menuToggle.addEventListener('input', () => {
    menu.classList.toggle('open');
    overlay.classList.toggle('active');
    document.body.style.overflow = 'hidden';
    if (menuToggle.checked === false) {
        document.body.style.overflow = 'visible';
    }
});

overlay.addEventListener('click', () => {
    overlay.classList.remove('active');
    menu.classList.remove('open');
    menuToggle.checked = false;
    document.body.style.overflow = 'visible';
});