const time = document.getElementById(`time`)
const btnStart = document.getElementById(`btn-start`)
const btnPause = document.getElementById(`btn-pause`)
const btnReset = document.getElementById(`btn-reset`)
const btnResume = document.getElementById(`btn-resume`)
const shortBreakBtn = document.getElementById(`shortbreak`)
const focus = document.getElementById(`focus`)
const longBreak = document.getElementById(`longbreak`)
let currentInterval = `focus`

time.textContent = `25:00`
let counting = false
let min = 25;
let sec = 0;
let timerInterval
function start() {


    if (!counting) {
        counting = true

         timerInterval = setInterval(()=> {
            const minutes = min.toString().padStart(2, `0`)
            const seconds = sec.toString().padStart(2, '0');
            time.textContent = `${minutes}:${seconds}`

            if (sec === 0 && min === 0) {
                clearInterval(timerInterval)
                counting = false
            } else if (sec === 0) {
                min-- // Se segundos chegar a 0, decrementar
                // o valor dos minutos em 1 e definir segundos como 59
                sec = 59
            } else {
                sec--
            }

        }, 1000)

        btnStart.style.display = `none`
        btnPause.style.display = `block`
        btnReset.style.display = (`block`)

}}

function pausebtn() {
    clearInterval(timerInterval)
    counting = false
    btnPause.style.display = `none`
    btnResume.style.display = `block`
    btnReset.classList.add(`show`)
}

function shortBreak() {
    currentInterval = `shortbreak`
    min = 5
    sec = 0

    btnStart.style.display = `block`
    btnPause.style.display = `none`

   const minutes = min.toString().padStart(2, `0`)
    const seconds = sec.toString().padStart(2, `0`)
    time.textContent = `${minutes}:${seconds}`

}

function focusAsBtn() {
    currentInterval = `focus`
    min = 25
    sec = 0
    btnStart.style.display = `block`
    btnPause.style.display = `none`
    const minutes = min.toString().padStart(2, `0`)
    const seconds = sec.toString().padStart(2, `0`)
    time.textContent = `${minutes}:${seconds}`
}

function resetBtn() {

    clearInterval(timerInterval)
    counting = false

    if (currentInterval === 'focus') {
        min = 25;
    } else if (currentInterval === 'shortbreak') {
        min = 5;
    } else if (currentInterval === 'longbreak') {
        min = 15;
    }

    sec = 0;
    const minutes = min.toString().padStart(2, `0`)
    const seconds = sec.toString().padStart(2, `0`)
    time.textContent = `${minutes}:${seconds}`
    btnStart.style.display = `block`
    btnPause.style.display = `none`
    btnResume.style.display = `none`
    btnReset.style.display = `none`
}


function resumeBtn() {
    start()
    btnResume.style.display = `none`
    btnPause.style.display = `block`
}


function longBreakAsFn() {
    currentInterval = `longbreak`
    min = 15
    sec = 0

    const minutes = min.toString().padStart(2, `0`)
    const seconds = sec.toString().padStart(2, `0`)

    time.textContent = `${minutes}:${seconds}`
}


btnStart.addEventListener(`click`, () => {
    start()
})

btnPause.addEventListener(`click`, () => {
    pausebtn()
})

btnResume.addEventListener(`click`, () => {
    resumeBtn()
})

shortBreakBtn.addEventListener(`click`, () => {
    shortBreak()
    pausebtn()
    btnResume.style.display = `none`
    btnReset.style.display = (`none`)
})

focus.addEventListener(`click`, () => {
    focusAsBtn()
    pausebtn()
    btnResume.style.display = `none`
})

btnReset.addEventListener(`click`, () => {
    resetBtn()
    pausebtn()
    btnResume.style.display = `none`
})

longBreak.addEventListener(`click`, () => {
    longBreakAsFn()
})

