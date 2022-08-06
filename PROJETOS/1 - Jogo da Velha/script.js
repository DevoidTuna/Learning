const telaMenu = document.querySelector("#menu")
const telaJogo = document.querySelector("#jogo")
const statusTXT = document.querySelector("#status")
const bloco = document.getElementsByClassName("bloco")
const pontosXTXT = document.querySelector("#pontosX")
const pontosOTXT = document.querySelector("#pontosO")
const btnReiniciar = document.querySelector('#btn-reiniciar-rodape')
let jogador = 'X'
let quemComecou = 'O'
let pontosX = 0
let pontosO = 0

let posicoes = [
    0, 0, 0,
    0, 0, 0,
    0, 0, 0
]

const posicoesVitoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]


reiniciar()

function clicar(i) {
    if(bloco[i].value == ' ') {
        bloco[i].value = jogador
        if(jogador == 'X') {
            posicoes[i] += 1
        } else if(jogador == 'O') {
            posicoes[i] -= 1
        }
        alternador()
        statusTXT.innerHTML = `${jogador}`
    }
    checagem()
    pontosXTXT.innerHTML = `Pontos X: ${pontosX}`
    pontosOTXT.innerHTML = `Pontos O: ${pontosO}`
}

function checagem() {
    for(let i = 0; i < 8; i++) {
        let check = posicoes[posicoesVitoria[i][0]] + posicoes[posicoesVitoria[i][1]] + posicoes[posicoesVitoria[i][2]]
        let empate = (posicoes.every( (e) => e != 0))
        if(check == 3) {
            statusTXT.innerHTML = 'Vitória X'
            destaque(bloco[posicoesVitoria[i][0]], bloco[posicoesVitoria[i][1]], bloco[posicoesVitoria[i][2]])
        } else if(check == -3) {
            statusTXT.innerHTML = 'Vitória O'
            destaque(bloco[posicoesVitoria[i][0]], bloco[posicoesVitoria[i][1]], bloco[posicoesVitoria[i][2]])
        } else if(empate == true) {
            statusTXT.innerHTML = 'EMPATE'
            statusTXT.style.color = 'yellow'
            for(let i = 0; i < 9; i++) {
                bloco[i].style.color = 'yellow'
                btnReiniciar.style.backgroundColor = '#ffff00'
                btnReiniciar.style.color = 'black'
            }
        }
    }
}

function alternador() {
    if(jogador == 'X') {
        return jogador = 'O'
    } else {
        return jogador = 'X'
    }
}

function quemComeca() {
    if(quemComecou == 'X') {
        quemComecou = 'O'
        return jogador = 'O'
    } else {
        quemComecou = 'X'
        return jogador = 'X'
    }
}



function destaque(x, y, z) {
    for(let i = 0; i < 9; i++) {
        bloco[i].disabled = true
        bloco[i].style.color = 'gray'
    }
    if(x.value == 'X') {
        x.style.color = 'red'
        y.style.color = 'red'
        z.style.color = 'red'
        statusTXT.style.color = 'red'
        btnReiniciar.style.backgroundColor = '#ff0000'
        btnReiniciar.style.color = 'white'
    } else if(x.value == 'O') {
        x.style.color = 'blue'
        y.style.color = 'blue'
        z.style.color = 'blue'
        statusTXT.style.color = 'blue'
        btnReiniciar.style.backgroundColor = '#0000ff'
        btnReiniciar.style.color = 'white'
    }
}

function reiniciar() {
    for(let i = 0; i <9; i++) {
        bloco[i].disabled = false
        bloco[i].value = ' '
        bloco[i].style.color = 'white'
        statusTXT.style.color = 'white'
        btnReiniciar.style.color = 'black'
        btnReiniciar.style.backgroundColor = '#ffffff'
        posicoes[i] = 0
    }
    quemComeca()
    statusTXT.innerHTML = `${jogador} começa`
}

/*
function checar() {
    let roundWon = false
    for (let i = 0; i <= 7; i++) {
        const winCondition = posicoesVitoria[i]
        let a = posicoes[winCondition[0]]
        let b = posicoes[winCondition[1]]
        let c = posicoes[winCondition[2]]
        if (a === 0 || b === 0 || c === 0) {
            continue
        }
        if (a === b && b === c) {
            roundWon = true
            break
        }
    }
    if (roundWon) {
            statusTXT.innerHTML = `O jogador ${jogador}`
            return
    }
}

function checar2() {
    for(let i = 0; i <=7; i++) {
        let posVitoria = posicoesVitoria[i]
        if((posicoes.includes(posicoesVitoria[i])) == posVitoria) {
            statusTXT.innerHTML = 'ACERTOOOUUUU'
        }
    }
}
*/

/*
Para toda posição de vitória (x1, x2, x3) faça:
    soma = posicoes[x1] + posicoes[x2] + posicoes[x3]     
    se soma = 3, então o jogador 1 ganhou (pode por exemplo retornar um objeto com {jogador: 1, posicoes: [x1,x2,x3]})
    se soma = -3 então o jogador -1 ganhou (pode por exemplo retornar um objeto com {jogador: -1, posicoes: [x1,x2,x3]}) 
*/

// Fiz o modo mais braçal no momento, conforme vou adquirindo conhecimento e experiencia vou fazer este código de uma forma mais inteligente
/* function checagem() {
    if(bloco[0].value == bloco[1].value && bloco[1].value == bloco[2].value) {
        if(bloco[0].value === 'O') {
            pontosO += 1
            statusTXT.innerHTML = 'Vitória O'
            destaque(bloco[0], bloco[1], bloco[2])
        } else if(bloco[0].value === 'X'){
            pontosX += 1
            statusTXT.innerHTML = 'Vitória X'
            destaque(bloco[0], bloco[1], bloco[2])
        }

    } else if(bloco[3].value == bloco[4].value && bloco[4].value == bloco[5].value) {
        if(bloco[3].value === 'O') {
            pontosO += 1
            statusTXT.innerHTML = 'Vitória O'
            destaque(bloco[3], bloco[4], bloco[5])
        } else if(bloco[3].value === 'X'){
            pontosX += 1
            statusTXT.innerHTML = 'Vitória X'
            destaque(bloco[3], bloco[4], bloco[5])
        }

    } else if(bloco[6].value == bloco[7].value && bloco[7].value == bloco[8].value) {
        if(bloco[6].value === 'O') {
            pontosO += 1
            statusTXT.innerHTML = 'Vitória O'
            destaque(bloco[6], bloco[7], bloco[8])
        } else if(bloco[6].value === 'X'){
            pontosX += 1
            statusTXT.innerHTML = 'Vitória X'
            destaque(bloco[6], bloco[7], bloco[8])
        }

    } else if(bloco[0].value == bloco[3].value && bloco[3].value == bloco[6].value) {
        if(bloco[0].value === 'O') {
            pontosO += 1
            statusTXT.innerHTML = 'Vitória O'
            destaque(bloco[0], bloco[3], bloco[6])
        } else if(bloco[0].value === 'X'){
            pontosX += 1
            statusTXT.innerHTML = 'Vitória X'
            destaque(bloco[0], bloco[3], bloco[6])
        }

    } else if(bloco[1].value == bloco[4].value && bloco[4].value == bloco[7].value) {
        if(bloco[1].value === 'O') {
            pontosO += 1
            statusTXT.innerHTML = 'Vitória O'
            destaque(bloco[1], bloco[4], bloco[7])
        } else if(bloco[1].value === 'X'){
            pontosX += 1
            statusTXT.innerHTML = 'Vitória X'
            destaque(bloco[1], bloco[4], bloco[7])
        }
        
    } else if(bloco[2].value == bloco[5].value && bloco[5].value == bloco[8].value) {
        if(bloco[2].value === 'O') {
            pontosO += 1
            statusTXT.innerHTML = 'Vitória O'
            destaque(bloco[2], bloco[5], bloco[8])
        } else if(bloco[2].value === 'X'){
            pontosX += 1
            statusTXT.innerHTML = 'Vitória X'
            destaque(bloco[2], bloco[5], bloco[8])
        }

    } else if(bloco[0].value == bloco[4].value && bloco[4].value == bloco[8].value) {
        if(bloco[0].value === 'O') {
            pontosO += 1
            statusTXT.innerHTML = 'Vitória O'
            destaque(bloco[0], bloco[4], bloco[8])
        } else if(bloco[0].value === 'X'){
            pontosX += 1
            statusTXT.innerHTML = 'Vitória X'
            destaque(bloco[0], bloco[4], bloco[8])
        }

    } else if(bloco[2].value == bloco[4].value && bloco[4].value == bloco[6].value) {
        if(bloco[2].value === 'O') {
            pontosO += 1
            statusTXT.innerHTML = 'Vitória O'
            destaque(bloco[2], bloco[4], bloco[6])
        } else if(bloco[2].value === 'X'){
            pontosX += 1
            statusTXT.innerHTML = 'Vitória X'
            destaque(bloco[2], bloco[4], bloco[6])
        }

    } else if((bloco[0].value != ' ') && (bloco[1].value != ' ') && (bloco[2].value != ' ')
    && (bloco[3].value != ' ') && (bloco[4].value != ' ') && (bloco[5].value != ' ')
    && (bloco[6].value != ' ') && (bloco[7].value != ' ') && (bloco[8].value != ' ')) {
        statusTXT.innerHTML = 'EMPATE'
        statusTXT.style.color = 'yellow'
        for(let i = 0; i < 9; i++) {
            bloco[i].style.color = 'yellow'
            btnReiniciar.style.backgroundColor = '#ffff00'
            btnReiniciar.style.color = 'black'
        }
    }
} */