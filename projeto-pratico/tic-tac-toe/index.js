playerOneInput = document.getElementById(`playerOne`)
playerTwoInput = document.getElementById(`playerTwo`)
const statusText = document.getElementById(`statusText`)
const startGameBtn = document.getElementById(`startGameBtn`)
let currentPlayer = ``
const winConditions = [
    [1, 2, 3], // Top row
    [4, 5, 6], // Middle row
    [7, 8, 9], // Bottom row
    [1, 4, 7], // Left column
    [2, 5, 8], // Middle column
    [3, 6, 9], // Right column
    [1, 5, 9], // Main diagonal
    [3, 5, 7] // Secondary diagonal
]

turn = `x`

const board = [
    ``, ``, ``,
    ``, ``, ``,
    ``, ``, ``
]

function checkWin() {
    for (let i = 0; i < winConditions.length; i++) {
        const [a, b, c] = winConditions[i];
        const cell1 = board[a - 1];
        const cell2 = board[b - 1];
        const cell3 = board[c - 1];

        if (cell1 !== '' && cell1 === cell2 && cell2 === cell3) {
            return cell1; // Retorna o valor do vencedor (X ou O)
        }
    }
    return null;
}

// Fazer a função para alterar os jogadores a cada turno

function switchPlayer() {
    if (currentPlayer === playerOneInput.value) {
        currentPlayer = playerTwoInput.value
    } else {
        currentPlayer = playerOneInput.value
    }
    statusText.textContent = `Turno de ${currentPlayer}`
}


function playerName() {
    startGameBtn.addEventListener(`click`, () => {
        if (playerOneInput.value && playerTwoInput.value) {
            currentPlayer = playerOneInput.value
            switchPlayer()
            startGameBtn.disabled = true
        } else {
            alert(`Por favor, insira os nomes dos dois jogadores`)
        }
    })

}


function clickSquare() {

    const cells = document.querySelectorAll(`.cell`)

    cells.forEach(cell => {
        cell.addEventListener(`click`, () => {
            // Verifica se a célula já está marcada
            if (cell.textContent === `` && currentPlayer) {
                let marker;
                if (currentPlayer === playerOneInput.value) {
                    marker = `O`
                } else {
                    marker = `X`
                }
                const span = document.createElement(`span`)
                span.textContent = marker
                if (marker === `X`) {
                    span.style.color = `#FF0000`
                } else {
                    span.style.color = `#0000FF`
                }

                cell.appendChild(span)

                // Adicionando ao tabuleiro (board)
                const index = parseInt(cell.dataset.index);
                board[index - 1] = marker;

                // Verificar se há um vencedor após cada jogada
                const winner = checkWin()
                if (winner) {
                    statusText.textContent = `O jogador ${winner} venceu!`
                } else {
                    switchPlayer()
                }
            }
        })
    })


}

clickSquare()
playerName()
