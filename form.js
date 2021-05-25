const username = document.querySelector('#username')
const password = document.querySelector('#password')
const password2 = document.querySelector('#password2')
const email = document.querySelector('#email')
const sendBtn = document.querySelector('.send')
const clearBtn = document.querySelector('.clear')
const popup = document.querySelector('.popup')

clearBtn.addEventListener('click', e => {
    e.preventDefault();

    [username,password,password2,email].forEach(el => {
        el.value = '';
        clearError(el)
    })

    console.log("ok")
})

sendBtn.addEventListener('click', e => {
    e.preventDefault();

    checkForm([username, password, password2, email])
    checkLength(username, 3)
    checkLength(password, 8)
    checkPassword(password, password2)
    validateEmail(email)
    checkErrors()
})

let checkForm = input => {

    input.forEach(el => {
        if(el.value === '') {
            showError(el, el.placeholder)
        } else {
            clearError(el)
            console.log("ok")
        }
    })
}

let showError = (input, msg) => {

    let formBox = input.parentElement
    let errorMsg = formBox.querySelector('.error-text')

    formBox.classList.add('error')
    errorMsg.textContent = msg
}

let clearError = input => {
    let formBox = input.parentElement
    formBox.classList.remove('error')
}

let checkLength = (input, min) => {
    if (input.value.length < min) {
        showError(input, input.previousElementSibling.innerText.slice(0, -1) + ' składa się z min. ' + min + ' znaków.')
    }
}

let checkPassword = (password, password2) => {
    if (password.value !== password2.value) {
        showError(password2, "Hasła nie są identyczne.")
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(re.test(email.value)) {
        clearError(email)
    } else {
        showError(email, "E-mail jest niepoprawny")
    }
}

let checkErrors = () => {

    let allInputs = document.querySelectorAll('.form-box');
    let errorCount = 0

    allInputs.forEach(el => {
        if(el.classList.contains('error')) {
            errorCount++
        }
    })

    if (errorCount === 0) {
        popup.classList.add("show-popup")
    }
}
