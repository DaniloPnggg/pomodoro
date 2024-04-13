const parent = document.getElementById(`orderForm`)
let devArray = []

const addTech = document.getElementById(`addTech`)


addTech.addEventListener(`click`, function (ev) {
    ev.preventDefault()


    function inputTech() {
        const labelTechName = document.createElement(`label`)
        labelTechName.innerHTML = `Nome da Tecnologia:`
        labelTechName.setAttribute(`name`, `nameTech`)
        parent.appendChild(labelTechName)
        const input = document.createElement(`input`)
        input.setAttribute(`name`, `techName`)
        parent.appendChild(input)
        parent.appendChild(document.createElement(`br`))
        parent.appendChild(document.createElement(`br`))

    }

    function radio() {

      const labelExp = document.createElement(`label`)
        labelExp.setAttribute(`name`, `labelExp`)
        labelExp.innerHTML = `Tempo de experiência`
        parent.appendChild(labelExp)
        parent.appendChild(document.createElement(`br`))
        parent.appendChild(document.createElement(`br`))


        const radioExp1 = document.createElement(`input`)
        radioExp1.setAttribute(`type`, `radio`)
        radioExp1.setAttribute(`name`, `radioExp`)
        radioExp1.setAttribute(`value`, `0-2 anos`);
        parent.appendChild(radioExp1)
        parent.appendChild(document.createTextNode(`0-2 anos`))
        parent.appendChild(document.createElement(`br`))

        const radioExp2 = document.createElement(`input`)
        radioExp2.setAttribute(`type`, `radio`)
        radioExp2.setAttribute(`name`, `radioExp`)
        radioExp2.setAttribute(`value`, `3-4 anos`);
        parent.appendChild(radioExp2)
        parent.appendChild(document.createTextNode(`3-4 anos`))
        parent.appendChild(document.createElement(`br`))

        const radioExp3 = document.createElement(`input`)
        radioExp3.setAttribute(`type`, `radio`)
        radioExp3.setAttribute(`name`, `radioExp`)
        radioExp3.setAttribute(`value`, `5+ anos`);
        parent.appendChild(radioExp3)
        parent.appendChild(document.createTextNode(`5+ anos`))
        parent.appendChild(document.createElement(`br`))
        parent.appendChild(document.createElement(`br`))
    }

    function removerButton() {
        const removeBtn = document.createElement(`button`)
        removeBtn.textContent = `Remover linha`
        parent.appendChild(removeBtn)
        parent.appendChild(document.createElement(`br`))
        parent.appendChild(document.createElement(`br`))
    }

    function register() {
        const registerBtn = document.createElement(`button`)
        registerBtn.textContent = `Registrar`
        parent.appendChild(registerBtn)

        registerBtn.addEventListener(`click`, function() {

            const nomeDev = document.querySelector(`input[name="devName"]`).value
            const techName = document.querySelector(`input[name="techName"]`).value
            const experience = document.querySelector(`input[name="radioExp"]:checked`).value

            // Criando objeto do desenvolvedor com as informações coletadas

            const devInfo = {
                nomeDev: nomeDev,
                techName: techName,
                experience: experience
            }

            // Adicionando o objeto ao array de desenvolvedores

            devArray.push(devInfo)

            // limpar o formulario
            parent.reset()

            // Exibindo o array de desenvolvedores no alert para teste
          alert(`Nome do dev: ${nomeDev}\nNome da tecnologia: ${techName}\nTempo de experiência: ${experience}`);
        })

    }


    inputTech()
    radio()
    removerButton()
    register()

})