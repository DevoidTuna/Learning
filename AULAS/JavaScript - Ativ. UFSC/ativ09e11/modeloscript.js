/*
9) Crie um programa que receba um valor, converta para inteiro e, em seguida, mostre o
valor armazenado na tela.

11) Crie um programa que receba uma string como entrada e mostre a string invertida na
tela.
*/

var res9 = document.getElementById('res9')
var n = window.prompt('Digite um número:')
n = Number(n)
if (n === Number(n)) {
    res9.innerHTML += `${n} - Tipo: ${typeof(n)}.`
} else {
    res9.innerHTML = 'Não é um número!'
}
//----------------------------------------------
function inverter() {
    let texto = document.getElementById('texto').value
    let res11 = document.getElementById('res11')
    let i = texto.length - 1
    let str = ''
    if (texto == 0) {
        window.alert('[ERRO] Inserir string para inverter.')
    } else {
        while (i >= 0) {
            str += texto[i]
            i--
        }
        res11.innerHTML = `${str}`
    }
}