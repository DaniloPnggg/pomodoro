 function addPlayer() {
     const position = document.getElementById(`position`).value
     const name = document.getElementById(`name`).value
     const shirt = document.getElementById(`shirt`).value

    const confirmacao = confirm(`Deseja escalar o jogador ${name} na posição ${position} camisa ${shirt}?`)

     if (confirmacao) {
         const scaleList = document.getElementById(`playerList`)
         const novoJogador = document.createElement(`li`)
         novoJogador.innerText = `Nome: ${name}; Posição: ${position}; camisa ${shirt}`
         novoJogador.id = `player-${shirt}`
         scaleList.appendChild(novoJogador)

         // Limpar os campos
         document.getElementById(`position`).value = ``
         document.getElementById(`name`).value = ``
         document.getElementById(`shirt`).value = ``
     }
 }

 function removePlayer() {

     const number = document.getElementById(`numberToRemove`).value
     const playerToRemove = document.getElementById(`player-${number}`)

     const confirmacao = confirm(`Deseja remover o jogador ${playerToRemove.innerText}?`)

     if (confirmacao) {
         playerToRemove.remove()
         document.getElementById("numberToRemove").value = ""


     }
 }

