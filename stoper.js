let startBtn = document.querySelector(".start")
let pauseBtn = document.querySelector(".pause")
let stopBtn = document.querySelector(".stop")
let resetBtn = document.querySelector(".reset")
let historyBtn = document.querySelector(".history")
let stopWatch = document.querySelector(".stopwatch")
let time = document.querySelector(".time")
let timeList = document.querySelector(".time-list")
let infoBtn = document.querySelector(".info")
let modalShadow = document.querySelector(".modal-shadow")
let closeModalBtn = document.querySelector(".close")

let countTime;
let minutes = 0;
let seconds = 0;
let timeArr = []

let start = () => {
    // clearInterval(countTime)

    countTime = setInterval(() => {
        if (seconds < 9) {
            seconds++;
            stopWatch.textContent = minutes + ":0" + seconds
        } else if ( seconds >= 9 && seconds < 59) {
            seconds++
            stopWatch.textContent = minutes + ":" + seconds
        } else {
            minutes++
            seconds = 0
            stopWatch.textContent = minutes + ':00'
        }
    }, 100)
}

let pause = () => {
    clearInterval(countTime)
}

let stop = () => {

    time.innerHTML = "Ostatni czas: " + stopWatch.textContent

    if (stopWatch.textContent !== '0:00') {
        time.style.visibility = 'visible'
        timeArr.push(stopWatch.textContent)
    }

    clearInterval(countTime)

    stopWatch.textContent = '0:00'
    timeList.textContent = ''
    seconds = 0
    minutes = 0
}

let reset = () => {

    clearInterval(countTime)
    timeArr = []
    time.style.visibility = 'hidden'
    stopWatch.textContent = '0:00'
    timeList.textContent = ''
    seconds = 0
    minutes = 0

}

let showHistory = () => {

    timeList.textContent = ''
    let num = 1
    console.log(timeArr)

    timeArr.forEach(time => {
        let newTime = document.createElement('li')
        newTime.innerHTML = "Pomiar nr " + num + ": " + time
        
        timeList.appendChild(newTime)
        num++
    })
}

let showInformations = () => {
    if (modalShadow.style.display === 'block') {
        modalShadow.style.display = "none"
    } else {
        modalShadow.style.display = "block"
    }

    modalShadow.classList.toggle("modal-animation")
}

startBtn.addEventListener('click', start)
pauseBtn.addEventListener('click', pause)
stopBtn.addEventListener('click', stop)
resetBtn.addEventListener('click', reset)
historyBtn.addEventListener('click', showHistory)
infoBtn.addEventListener('click', showInformations)
closeModalBtn.addEventListener('click', showInformations)
window.addEventListener('click', e => e.target === modalShadow ? showInformations() : false)