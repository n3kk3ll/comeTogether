'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form'),
        phoneInput = form.querySelector('[type="tel"]'),
        nameInput = form.querySelector('#name');
    form.addEventListener('submit', sendForm);

    async function sendForm(e) {
        e.preventDefault();

        let error = validateForm(form);

        if (error === 0) {
            alert('Дані надіслані. Чекайте зворотного зв\'язку');
            e.target.reset();
        } else {
            alert('Виникла помилка. Будь ласка, перевірте правильність заповнення форми!');
        }
    }

    function validateForm(form) {
        let error = 0;

        const requiredFields = form.querySelectorAll('.required');
        for (let i = 0; i < requiredFields.length; i++) {
            const input = requiredFields[i];
            removeErrorClass(input);

            if (input.getAttribute('name') === 'name') {
                if (testInput(nameInput)) {
                    addErrorClass(input);
                    error++;
                }
            } else {
                if (input.value === '') {
                    addErrorClass(input);
                    error++;
                }
            }
        }
        return error;
    }

    function addErrorClass(input) {
        input.classList.add('error');
    }

    function removeErrorClass(input) {
        input.classList.remove('error');
    }

    function maskInput(input) {
        let phoneInput = input;
        let maskOptions = {
            mask: '+{38} (000) 000-00-00',
        };
        let mask = IMask(phoneInput, maskOptions);
    }
    maskInput(phoneInput);

    function testInput(input) {
        return !/^[ a-zA-ZА-Яа-яёЁЇїІіЄєҐґàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ'`'\-]+$/.test(input.value);
    }
});