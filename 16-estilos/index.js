function useLightTheme() {
    document.body.style.color = `#212529` // Cor da fonte (escura)
    document.body.style.backgroundColor = `#f1f5f9` // Cor do background
}

function useDarkTheme() {
    document.body.style.color = `#f1f5f9` // Cor da fonte (clara)
    document.body.style.backgroundColor = `#212529` // Cor do background
}

function switchTheme() {
    document.body.classList.toggle(`is-light`)
    document.body.classList.toggle(`is-dark`)
}

document.getElementById(`lightBtn`).addEventListener(`click`, useLightTheme)
document.getElementById(`darkBtn`).addEventListener(`click`, useDarkTheme)
document.getElementById(`switchBtn`).addEventListener(`click`, switchTheme)