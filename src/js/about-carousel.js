const aboutSwiperOne = new Swiper('.about-carousel-1', {
    navigation: {
        nextEl: document.querySelector('.about__block-carousel-controls-next'),
        prevEl: document.querySelector('.about__block-carousel-controls-prev'),
    },
    slidesPerView: 1,
    speed: 800,
    spaceBetween: 30,
    loop: true,
    watchOverflow: true,
});

const aboutSwiperTwo = new Swiper('.about-carousel-2', {
    navigation: {
        nextEl: document.querySelector('.about__block-2-carousel-controls-next'),
        prevEl: document.querySelector('.about__block-2-carousel-controls-prev'),
    },
    slidesPerView: 1,
    speed: 800,
    spaceBetween: 30,
    loop: true,
    watchOverflow: true,
});

const aboutSwiperThree = new Swiper('.about-carousel-3', {
    navigation: {
        nextEl: document.querySelector('.about__block-3-carousel-controls-next'),
        prevEl: document.querySelector('.about__block-3-carousel-controls-prev'),
    },
    slidesPerView: 1,
    speed: 800,
    spaceBetween: 30,
    loop: true,
    watchOverflow: true,
});