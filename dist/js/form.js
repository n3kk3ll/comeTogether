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
            
            let req = new XMLHttpRequest();
            req.open('POST', 'mail.php', true);
            req.onload = () => {
                if(req.status == 200 && req.status < 400) {
                    let json = JSON.parse(req.response);
                    for (let key in json) {
                        localStorage.setItem(key, json[key]);
                    }
                } else {
                    window.location.href = '404.html';
                }
            };
            req.onerror = () => {
                window.location.href = '404.html';
            };
            req.send(new FormData(form));

            e.target.reset();
            window.location.href = 'success.html';
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
        input.classList.add('input__error');
        insertErrorText(input);
    }

    function insertErrorText(input) {
        input.insertAdjacentHTML('afterend', '<span class="input__error-text">Будь ласка, перевірте правильність заповнення форми</span>');
        if (input.nextSibling.classList.contains('input__error-text')) {
            input.nextSibling.nextSibling.remove();
        }
    }

    function removeErrorClass(input) {
        input.classList.remove('input__error');
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