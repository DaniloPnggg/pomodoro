let fold = 0
const askShip = prompt(`Qual o nome da sua nave?`)
let askFold = parseInt(prompt(`Deseja entrar em dobra espacial?\n\n1. Sim\n2. Não`))

while (askFold === 1) {
    fold++
    askFold = parseInt(prompt(`Deseja entrar em dobra espacial?\n\n1. Sim\n2. Não`))
}

alert(`Nave ${askShip} fez ${fold} dobras espaciais`)