var telaMenu = document.querySelector("#menu")
var telaJogo = document.querySelector("#jogo")
var statusTXT = document.querySelector("#status")
var bloco = document.getElementsByClassName("bloco")
var jogador = "X"
var quemComecou = 'X'
var vez = document.querySelector("#vez")
var posicoes = [
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
var ganhador = '_'

function alternador() {
    if(jogador == 'X') {
        return jogador = 'O'
    } else {
        return jogador = 'X'
    }
}

for(let a = 0; a < 9; a++) {
    function clicar(i) {
        if(bloco[i].value == '' && ganhador == '_') {
            if(jogador == 'X') {
                posicoes[i] = i = 1
            } else {
                posicoes[i] = i = -1
            }
            bloco[i].value = jogador
            alternador()
            vez.innerHTML = jogador
            statusTXT.innerHTML = posicoes
            checarVencedor()
        }
    }
}

