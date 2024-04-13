////let askCharacter = prompt(`Qual caracter deseja substituir?`)
//let askNewCharacter = prompt(`Por qual caracter deseja substituir?`)

//let newShipName = ``

//for (let i = 0; i < askShip.length; i++) {
//    if (askShip[i] === askCharacter) { // Se igual ao car acter que deseja substituir
//       newShipName += askNewCharacter; // Adiciona o novo caractere
//  } else {
//       newShipName += askShip[i]; // Mantém o caractere original
// }
//

//alert(`Nome da sua nave agora: ${newShipName}`);

let askShip = prompt(`Qual o nome da nave?`)
let askCharacter = prompt(`Qual caracter deseja substituir?`)
let askCharacterReplace = prompt(`Por qual deseja substituir?`)

let newShipName = ``

for (let i = 0; i < askShip.length; i++) {
    if (askShip[i] === askCharacter) // Se for igual ao caracter que deseja substituir,
        newShipName += askCharacterReplace
   else {
    newShipName += askShip[i]
}
}

alert(`A nave se chama agora ${newShipName}`)