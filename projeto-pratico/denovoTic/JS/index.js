const time = document.getElementById(`time`)
const btnStart = document.getElementById(`btn-start`)
const btnPause = document.getElementById(`btn-pause`)
const btnReset = document.getElementById(`btn-reset`)
const btnResume = document.getElementById(`btn-resume`)
const shortBreakBtn = document.getElementById(`shortbreak`)
const focus = document.getElementById(`focus`)
const longBreak = document.getElementById(`longbreak`)
const addTask = document.querySelector('.btn-addtask');
const toDoList = document.querySelector(`.todo-list`)
let currentInterval = null
let lastButtonClicked = `false`
time.textContent = `00:00`
let counting = false
let min = 25;
let sec = 0;
let timerInterval



function start() {
    if (!counting) {
        counting = true;

        timerInterval = setInterval(() => {
            const minutes = min.toString().padStart(2, `0`);
            const seconds = sec.toString().padStart(2, '0');
            time.textContent = `${minutes}:${seconds}`;


            updateTitle(minutes, seconds)

            if (sec === 0 && min === 0) {
                clearInterval(timerInterval);
                counting = false;
                playSound()
            } else if (sec === 0) {
                min--; // Se segundos chegar a 0, decrementar
                // o valor dos minutos em 1 e definir segundos como 59
                sec = 59;
            } else {
                sec--;
            }
        }, 1000);

        focus.disabled = true;
        shortBreakBtn.disabled = true;
        longBreak.disabled = true;
        focus.style.cursor = `not-allowed`;
        shortBreakBtn.style.cursor = `not-allowed`;
        longBreak.style.cursor = `not-allowed`;

        btnStart.style.display = `none`;
        btnPause.style.display = `block`;
        btnReset.style.display = `block`;

        colorChanging();
    } else {
        alert('Timer is already running. Please pause or reset the timer.');
    }
}

function addCheckBox() {


    const container = document.createElement(`div`);
    container.classList.add(`task-container`);
    const input = document.createElement(`input`)
    input.type = `text`
    input.style.width = `100%`
    input.style.backgroundColor = `rgba(45, 45, 45, 0.37)`
    input.style.color = `#c9c7c7`
    input.style.padding = `20px 80px`
    input.style.cursor = `pointer`
    input.style.fontWeight = `bold`
    input.style.fontSize = `21px`
    input.style.border = `2px #545454`
    input.style.borderRadius =  `0.5rem`
    input.placeholder = `Escreva algo aqui...`
    input.style.textAlign = `center`


    const checkbox = document.createElement(`input`)
    const buttonRemove = document.createElement(`button`)
    checkbox.type = `checkbox`
    checkbox.id = `checkboxCrossOut`
    buttonRemove.type = `button`
    buttonRemove.id = `buttonRemove`
    let text = document.createTextNode(`Botão`)

    container.appendChild(checkbox);
    container.appendChild(input);
    container.appendChild(buttonRemove);
    buttonRemove.appendChild(text);

    toDoList.appendChild(container);


    input.addEventListener(`mouseover`, () => {
        input.style.backgroundColor = `rgba(86, 86, 86, 0.35)`
    })

    input.addEventListener(`mouseout`, () => {
        input.style.backgroundColor = `rgba(204, 204, 204, 0.05)`
    })

    checkbox.addEventListener(`click`, () => {
        if (checkbox.checked) {
            input.style.textDecoration = `line-through`
        } else {
            input.style.textDecoration = `none`
        }
    })

    buttonRemove.addEventListener(`click`, () => {
        if (buttonRemove) {
            input.remove()
            buttonRemove.remove()
            checkbox.remove()
        } else {
            alert(`Como voce chegou ate aqui?`)
        }
    })

}

btnStart.addEventListener('click', () => {
    if (currentInterval !== null) {
        start();
    } else {
        alert('Selecione um modo antes de iniciar.');
    }


});

function colorChanging() {
    if (currentInterval === `focus`) {
        shortBreakBtn.style.backgroundColor = `#343538`;
        longBreak.style.backgroundColor = `#343538`;
    } else if (currentInterval === `shortbreak`) {
        focus.style.backgroundColor = `#343538`;
        longBreak.style.backgroundColor = `#343538`;
    } else if (currentInterval === `longbreak`) {
        shortBreakBtn.style.backgroundColor = `#343538`;
        focus.style.backgroundColor = `#343538`;
    }
}

focus.addEventListener('click', () => {
    currentInterval = 'focus';
    min = 25;
    sec = 0;
    focusAsBtn();
});

shortBreakBtn.addEventListener('click', () => {
    currentInterval = 'shortbreak';
    min = 5;
    sec = 0;
    shortBreak();
});

longBreak.addEventListener('click', () => {
    currentInterval = 'longbreak';
    min = 15;
    sec = 0;
    longBreakAsFn();
});

function pausebtn() {
    clearInterval(timerInterval);
    counting = false;
    btnPause.style.display = `none`;
    btnResume.style.display = `block`;
    btnReset.classList.add(`show`);

    focus.disabled = false;
    shortBreakBtn.disabled = false;
    longBreak.disabled = false;

    focus.style.cursor = `pointer`;
    shortBreakBtn.style.cursor = `pointer`;
    longBreak.style.cursor = `pointer`;


}

function shortBreak() {
    currentInterval = `shortbreak`;
    min = 5;
    sec = 0;

    if (min === 0 && sec === 0) {
        playSound()
    }

    btnStart.style.display = `block`;
    btnPause.style.display = `none`;

    const minutes = min.toString().padStart(2, `0`);
    const seconds = sec.toString().padStart(2, `0`);
    time.textContent = `${minutes}:${seconds}`;
    colorChanging();
}

function focusAsBtn() {
    currentInterval = `focus`;
    min = 25;
    sec = 0;
    btnStart.style.display = `block`;
    btnPause.style.display = `none`;
    const minutes = min.toString().padStart(2, `0`);
    const seconds = sec.toString().padStart(2, `0`);
    time.textContent = `${minutes}:${seconds}`;
    colorChanging();
}

function resetBtn() {
    clearInterval(timerInterval);
    counting = false;

    if (currentInterval === 'focus') {
        min = 25;
    } else if (currentInterval === 'shortbreak') {
        min = 5;
    } else if (currentInterval === 'longbreak') {
        min = 15;
    }

    sec = 0;
    const minutes = min.toString().padStart(2, `0`);
    const seconds = sec.toString().padStart(2, `0`);
    time.textContent = `${minutes}:${seconds}`;
    btnStart.style.display = `block`;
    btnPause.style.display = `none`;
    btnResume.style.display = `none`;
    btnReset.style.display = `none`;

    focus.disabled = false;
    shortBreakBtn.disabled = false;
    longBreak.disabled = false;

    focus.style.cursor = `pointer`;
    shortBreakBtn.style.cursor = `pointer`;
    longBreak.style.cursor = `pointer`;
}

function colors() {
    if (lastButtonClicked === `focus`) {
        focus.style.backgroundColor = `#8234E9`;
        shortBreakBtn.style.backgroundColor = ``;
        longBreak.style.backgroundColor = ``;
    } else if (lastButtonClicked === `shortbreak`) {
        shortBreakBtn.style.backgroundColor = `#8234E9`;
        focus.style.backgroundColor = ``;
        longBreak.style.backgroundColor = ``;
    } else if (lastButtonClicked === `longbreak`) {
        longBreak.style.backgroundColor = `#8234E9`;
        focus.style.backgroundColor = ``;
        shortBreakBtn.style.backgroundColor = ``;
    }
}

function resumeBtn() {
    start();
    btnResume.style.display = `none`;
    btnPause.style.display = `block`;
}

function longBreakAsFn() {
    currentInterval = `longbreak`;
    min = 15;
    sec = 0;

    const minutes = min.toString().padStart(2, `0`);
    const seconds = sec.toString().padStart(2, `0`);

    time.textContent = `${minutes}:${seconds}`;
    colorChanging();

    if (min === 0 && sec === 0) {
        playSound()
    }
}

function updateTitle(minutes, seconds) {
    document.title = `${minutes}:${seconds} - Pomodoro`
}

function playSound() {
    const audio = document.getElementById(`audio`)
    audio.play()
}

btnPause.addEventListener(`click`, () => {
    pausebtn();
});

btnResume.addEventListener(`click`, () => {
    resumeBtn();
});

shortBreakBtn.addEventListener(`click`, () => {
    currentInterval = `shortbreak`;
    shortBreak();
    pausebtn();
    btnResume.style.display = `none`;
    btnReset.style.display = (`none`);
    lastButtonClicked = `shortbreak`;
    colors();

});

focus.addEventListener(`click`, () => {
    currentInterval = `focus`;
    focusAsBtn();
    pausebtn();
    btnResume.style.display = `none`;
    lastButtonClicked = `focus`;
    colors();
});

btnReset.addEventListener(`click`, () => {
    resetBtn();
    pausebtn();
    btnResume.style.display = `none`;
    colors();
});

longBreak.addEventListener(`click`, () => {
    longBreakAsFn();
    pausebtn();
    if (longBreak) {
        btnStart.style.display = `block`;
        btnPause.style.display = `none`;
        btnResume.style.display = `none`;
        btnReset.style.display = (`none`);
    }
    lastButtonClicked = `longbreak`;
    colors();
});



addTask.addEventListener(`click`, addCheckBox)

// #262626
// #3e3f43
//#8234E9

// Evento mouseover para mudar a cor do shortBreakBtn quando o tempo está rodando

focus.addEventListener(`mouseover`, () => {
    if (counting === true && currentInterval === `focus`) {
        focus.style.backgroundColor = `#8234E9`

    } else if (counting === true && currentInterval !== `focus`) {
        focus.style.backgroundColor = `#2a2a2c`

    }  else if (counting === false && currentInterval !== `focus`) {
        focus.style.backgroundColor = `#8234E9`
    } else if (counting === false && currentInterval !== `focus`) {
        focus.style.backgroundColor = `#343538`
    }

    focus.addEventListener(`mouseout`, () => {
        if (counting === true && currentInterval !== `focus`) {
            focus.style.backgroundColor = `#343538`
        } else if (counting === false && currentInterval !== `focus`) {
            focus.style.backgroundColor = `#343538`
        }
     })

})
shortBreakBtn.addEventListener(`mouseover`, () => {
   if (counting === false && currentInterval !== `shortbreak`) {
        shortBreakBtn.style.backgroundColor = `#8234E9`
   } else if (counting === true && currentInterval !== `shortbreak`) {
       shortBreakBtn.style.backgroundColor = `#2a2a2c`
   } else if (counting === true && currentInterval === `shortbreak`) {
       shortBreakBtn.style.backgroundColor = `#8234E9`
   }


})


shortBreakBtn.addEventListener(`mouseout`, () => {
    if (counting === false && currentInterval !== "shortbreak") {
        shortBreakBtn.style.backgroundColor = `#343538`;
    } else if (counting === true && currentInterval !== `shortbreak`) {
        shortBreakBtn.style.backgroundColor = `#343538`
    }
})

longBreak.addEventListener(`mouseover`, () => {
    if (!counting && currentInterval !== `longbreak`) {
        longBreak.style.backgroundColor = `#8234E9`;
    } else if (counting && currentInterval !== `longbreak`) {
        longBreak.style.backgroundColor = `#2a2a2c`;
    }
});

longBreak.addEventListener(`mouseout`, () => {
    if (counting === false && currentInterval !== `longbreak`) {
        longBreak.style.backgroundColor = `#343538`;
    } else if (counting === false && currentInterval !== `longbreak`) {
        longBreak.style.backgroundColor = `#343538`
    } else if (counting === true && currentInterval !== `longbreak`) {
        longBreak.style.backgroundColor = `#343538`
    }
});

