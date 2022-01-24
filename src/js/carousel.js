const swiper = new Swiper('.carousel__slider', {
    navigation: {
        nextEl: document.querySelector('.carousel__controls-next'),
        prevEl: document.querySelector('.carousel__controls-prev'),
    },
    slidesPerView: 1.15,
    speed: 1000,
    spaceBetween: 60,
    loop: true,
    autoHeight: true,
    watchOverflow: true,
    breakpoints: {
        576: {
            slidesPerView: 1.15,
            spaceBetween: 30,
        },
        320: {
            slidesPerView: 1,
        }
    },
});