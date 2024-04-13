const lightYears = parseInt(prompt(`Digite a distância em anos luz que você deseja selecionar\n\n1. Parsec (pc)\n2. Unidade astronônima (AU)\n3.Quilômetros (km)`))
const requestNumber = parseInt(prompt(`Digite agora o número`))

switch (lightYears) {
    case 1:
        alert(`A resposta é: ${requestNumber * 0.306601}pc `)
    break
    case 2:
        alert(`A resposta é: ${requestNumber * 63241.1}Au`)
        break
    case 3:
        alert(`A resposta é: ${requestNumber * 9.5 * Math.pow(10,12)}km`)
        break
    default:
        alert(`Opção inválida`)

}

