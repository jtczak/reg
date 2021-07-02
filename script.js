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

        }
    })
};

// INPUT from checkForm -> array with inputs
// EL is every variable from array


const checkLength = (input, min)=>{
    if (input.value.length < min){
        showError(input, `${input.previousElementSibling.innerText.slice(0, -1)} must have minimum ${min} characters.`)
    }
}

const checkPass = (pass1, pass2)=>{
    if (pass1.value !== pass2.value){
        showError (pass2, 'Passwords are not matching.')
    }
}

sendBtn.addEventListener('click', e => {
    e.preventDefault();

    checkForm([username, pass, pass2, email]);
    checkLength(username, 6);
    checkLength(pass, 8);
    checkPass(pass, pass2);
})

clearBtn.addEventListener('click', e => {
    e.preventDefault();
    [username, pass, pass2, email].forEach(el => {
        el.value = ''
    })
});