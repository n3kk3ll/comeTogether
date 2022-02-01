'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle'),
        menu = document.querySelector('.header__nav'),
        label = document.querySelector('.header__menu-button-sm-label'),
        btnUp = document.querySelector('.pageup'),
        scroll = new SmoothScroll('a[href^="#"]', {
            speed: 200,
        });

    function menuOpen() {
        menu.classList.toggle('open');
    }

    function menuClose() {
        menu.classList.remove('open');
        menuToggle.checked = false;
    }

    function showScrollButton() {
        if (window.scrollY >= 1000) {
            btnUp.classList.add('show');
        } else {
            btnUp.classList.remove('show');
        }
    }

    showScrollButton();

    menuToggle.addEventListener('input', () => {
        menuOpen();
    });

    window.addEventListener('scroll', () => {
        showScrollButton();
    });
});


