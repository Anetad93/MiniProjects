const ball = document.querySelector('img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

const shakeBall = () => {
    ball.classList.add('shake-animation')
    setTimeout(checkInput, 1500)
    console.log('ok')
}

let checkInput = () => {
    if (input.value !== '' && input.value.slice(-1) === "?") {
        generateAnswer();
        error.textContent = ''
        ball.classList.remove('shake-animation')
    } else if (input.value !== '' && input.value.slice(-1) !== '?') {
        error.textContent = "Pytanie musi kończyć się znakiem zapytania"
        answer.textContent = ''
        ball.classList.remove('shake-animation')
    } else {
        error.textContent = "Zadaj pytanie!"
        answer.textContent = ''
        ball.classList.remove('shake-animation')
    }
}

let answersArr = ["Tak!", "Nie!", "Kto wie...", "Na pewno chcesz wiedzieć?", "Szkoda nawet myśleć"]

let generateAnswer = () => {
    let number = Math.floor(Math.random() * 5)
    answer.innerHTML = '<span>Odpowiedź: </span>' + answersArr[number]
}

ball.addEventListener('click', shakeBall)
