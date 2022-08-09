const telaMenu = document.querySelector("#menu")
const telaJogo = document.querySelector("#jogo")
const statusTXT = document.querySelector("#status")
const bloco = document.getElementsByClassName("bloco")
const pontosXTXT = document.querySelector("#pontosX")
const pontosOTXT = document.querySelector("#pontosO")
const btnReiniciar = document.querySelector('#btn-reiniciar-rodape')
let jogadas = 0
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

if(btnReiniciar.value == 'INICIAR') {
    for(let i = 0; i < 9; i++) {
        bloco[i].disabled = true
    }
}

function clicar(i) {
    if(bloco[i].value == ' ') {
        bloco[i].value = jogador
        if(jogador == 'X') {
            posicoes[i]++
        } else if(jogador == 'O') {
            posicoes[i]--
        }
        alternador()
        statusTXT.innerHTML = jogador
    }
    jogadas++
    jogadas > 4 ? checagem() : null
    pontosXTXT.innerHTML = pontosX
    pontosOTXT.innerHTML = pontosO
}

function checagem() {
    for(let i = 0; i < 8; i++) {
        let check = posicoes[posicoesVitoria[i][0]] + posicoes[posicoesVitoria[i][1]] + posicoes[posicoesVitoria[i][2]]
        let empate = posicoes.every(e => (e) != 0)
        if(check == 3) {
            statusTXT.innerHTML = 'Vitória X'
            pontosX++
            destaque(bloco[posicoesVitoria[i][0]], bloco[posicoesVitoria[i][1]], bloco[posicoesVitoria[i][2]])
            break
        } else if(check == -3) {
            statusTXT.innerHTML = 'Vitória O'
            pontosO++
            destaque(bloco[posicoesVitoria[i][0]], bloco[posicoesVitoria[i][1]], bloco[posicoesVitoria[i][2]])
            break
        } else if(empate) {
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
        jogador = 'O'
    } else {
        jogador = 'X'
    }
}

function quemComeca() {
    if(quemComecou == 'X') {
        quemComecou = 'O'
        jogador = 'O'
    } else {
        quemComecou = 'X'
        jogador = 'X'
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
    btnReiniciar.value = 'REINICIAR'
    statusTXT.innerHTML = `${jogador} começa`
    jogadas = 0
}