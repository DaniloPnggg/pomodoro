const input = document.getElementById(`input`)

document.getElementById(`value`).addEventListener(`click`, function() {
    input.value = `Olá, mundo!`
    console.log(input.value)
    console.log(input.getAttribute(`value`))
})

document.getElementById(`type`).addEventListener(`click`, () => {
   // input.type = input.type !== `radio` ? `radio` : `text`
    input.setAttribute(`type`, `radio`)
})

document.getElementById(`placeholder`).addEventListener(`click`, () => {
    input.placeholder = `Digite algo...`
})

document.getElementById(`disable`).addEventListener(`click`, () => {
    input.setAttribute(`disabled`, `true`)
})

document.getElementById(`data`).addEventListener(`click`, () => {
    const data = input.dataset.something
    console.log(`O valor do atribudo data-something é ${data}`)
    input.dataset.something = `Algum outro valor`
    console.log(`O valor do atribudo data-something agora é ${input.dataset.something}`)
})
