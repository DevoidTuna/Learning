/*
5) Crie um programa capaz de verificar se dois números estão no intervalo 30..50 ou no
intervalo 60..100 inclusive. Os valores devem ser informados por meio de janelas
prompt.
*/

var n1 = window.prompt('INTERVALO DE NUMEROS:\nInforme o primeiro número:')
var n2 = window.prompt('INTERVALO DE NUMEROS:\nInforme o segundo número:')
var res = document.getElementById('res')

a = n1 - n2
if (a < 0) {
    a *= -1
}

if (a > 1) {
    res.innerHTML = `Os números estão no intervalo de ${a} números.`
} else if (a == 1){
    res.innerHTML = `Os números estão no intervalo de 1 número.`
} else {
    res.innerHTML = `Os números são iguais.`
}