const username = document.querySelector('#username');
const pass = document.querySelector('#password');
const pass2 = document.querySelector('#password2');
const email = document.querySelector('#email');
const clearBtn = document.querySelector('.clear');
const sendBtn = document.querySelector('.send');
const popup = document.querySelector('.popup');
const closePopup = document.querySelector('.close');


const showError = (input, msg) => {
    //INPUT -> inputs
    //MSG -> placeholders
    const formBox = input.parentElement;
    const errorMsg = formBox.querySelector('.error-text');

    formBox.classList.add('error');
    errorMsg.textContent = msg;
};

const clearError = input => {
    const formBox = input.parentElement;
    formBox.classList.remove('error');

}

const checkForm = input => {
    input.forEach(el => {

        if (el.value === '') {

            showError(el, el.placeholder);
        } else {
            console.log('ok');
        }
    })
};

// INPUT from checkForm -> array with inputs
// EL is every variable from array

sendBtn.addEventListener('click', e => {
    e.preventDefault();

    checkForm([username, pass, pass2, email]);
})


clearBtn.addEventListener('click', e => {
    e.preventDefault();

    [username, pass, pass2, email].forEach(el => {
        el.value = ''
    })
})