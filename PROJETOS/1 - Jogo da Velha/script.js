var status = document.querySelector("#status");
var player1PontosTXT = document.querySelector("#player1");
var player2PontosTXT = document.querySelector("#player2");
var player1 = document.querySelector("#nome-player1").value
var player2 = document.querySelector("#nome-player2").value
var divJogo = document.querySelector("#jogo")
var divMenu = document.querySelector("#menu")
var modosJogo = document.querySelector("#modos-jogo")
var preMultiplayer = document.querySelector("#nome-jogadores")
var b1 = document.querySelector("#b1");
var b2 = document.querySelector("#b2");
var b3 = document.querySelector("#b3");
var b4 = document.querySelector("#b4");
var b5 = document.querySelector("#b5");
var b6 = document.querySelector("#b6");
var b7 = document.querySelector("#b7");
var b8 = document.querySelector("#b8");
var b9 = document.querySelector("#b9");
var player1Pontos = 5
var player2Pontos = 5


function jogar() {
    player1PontosTXT.innerHTML = `${player1}: ${player1Pontos} PTS`
    player2PontosTXT.innerHTML = `${player2}: ${player2Pontos} PTS`
    divMenu.style.display = "none"
    divJogo.style.display = "block"
}

function zerar() {
    player1Pontos = 0
    player2Pontos = 0
    jogar()
}

function menu() {
    divMenu.style.display = "block"
    divJogo.style.display = "none"
    modosJogo.style.display = "block"
    preMultiplayer.style.display = "none"
}

function reiniciar() {
    jogar()
}

function modoMultiplayer() {
    modosJogo.style.display = "none"
    preMultiplayer.style.display = "block"
}

function modoSingleplayerFacil() {

}

function modoSingleplayerDificil() {

}

function colocar() {

}