const ball = document.querySelector('img')
const input = document.querySelector('input')
const answer = document.querySelector('.answer')
const error = document.querySelector('.error')

let checkInput = () => {
    if (input.value !== '' && input.value.slice(-1) === "?") {
        generateAnswer();
        error.textContent = ''
    } else if (input.value !== '' && input.value.slice(-1) !== '?') {
        error.textContent = "Pytanie musi kończyć się znakiem zapytania"
    } else {
        error.textContent = "Zadaj pytanie!"
        answer.textContent = ''
    }
}

let answersArr = ["Tak!", "Nie!", "Kto wie...", "Na pewno chcesz wiedzieć?", "Szkoda nawet myśleć"]

let generateAnswer = () => {
    let number = Math.floor(Math.random() * 5)
    answer.innerHTML = '<span>Odpowiedź: </span>' + answersArr[number]
}

ball.addEventListener('click', checkInput)
