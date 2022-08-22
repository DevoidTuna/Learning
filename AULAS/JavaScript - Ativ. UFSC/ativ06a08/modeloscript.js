/*
6) Escreva um programa que receba um valor de temperatura em Celsius e mostre a
temperatura em Fahrenheit.

7) Crie um programa que receba uma string como entrada e apresente na tela a string
sem o primeiro e o último caractere.

8) Crie um programa no que verifica qual a região fiscal de um dado CPF e apresente na tela
o CPF e sua região fiscal
*/
function converter() {
    let c = document.getElementById('c')
    let res1 = document.getElementById('res1')
    if (c.value == 0) {
        window.alert('[ERRO] Gentileza informar temperatura para receber conversão.')
    } else {
        c = Number(c.value)
        let f = (c * 9/5) + 32
        res1.innerHTML = `${c}°C em Fahrenheit = ${f}°F`
    }
}   
//----------------------------
function formatar() {
    let txt2 = document.getElementById('txt2').value
    let res2 = document.getElementById('res2')
    let t = ''
    if (txt2 == 0) {
        window.alert('[ERRO] Gentileza informar palavra para formatar.')
    } else {
        for(i = 1; i < (txt2.length - 1); i++) {
        t += `${txt2[i]}`
        }
        res2.innerHTML = `${t}`
    }
}
//----------------------------
function verificar() {
    let cpf = document.getElementById('cpf').value
    let res3 = document.getElementById('res3')
    let i = cpf.length - 2
    if (cpf == 0) {
        window.alert('[ERRO] Gentileza informar o CPF para verificar.\nOBS: SOMENTE NÚMEROS!')
    } else {
        if (cpf[i] == 0) {
            res3.innerHTML = `Seu CPF ${cpf} é da região fiscal do RS.`
        } else if (cpf[i] == 1) {
            res3.innerHTML = `Seu CPF ${cpf} é das regiões fiscais de DF, GO, MT, MS e TO.`
        } else if (cpf[i] == 2) {
            res3.innerHTML = `Seu CPF ${cpf} é das regiões fiscais de AC, AP, AM, PA, RO e RR.`
        } else if (cpf[i] == 3) {
            res3.innerHTML = `Seu CPF ${cpf} é das regiões fiscais de CE, MA e PI.`
        } else if (cpf[i] == 4) {
            res3.innerHTML = `Seu CPF ${cpf} é das regiões fiscais de AL, PB, PE e RN.`
        } else if (cpf[i] == 5) {
            res3.innerHTML = `Seu CPF ${cpf} é das regiões fiscais de BA e SE.`
        } else if (cpf[i] == 6) {
            res3.innerHTML = `Seu CPF ${cpf} é da região fiscal de MG.`
        } else if (cpf[i] == 7) {
            res3.innerHTML = `Seu CPF ${cpf} é das regiões fiscais de ES e RJ.`
        } else if (cpf[i] == 8) {
            res3.innerHTML = `Seu CPF ${cpf} é da região fiscal de SP.`
        } else if (cpf[i] == 9) {
            res3.innerHTML = `Seu CPF ${cpf} é das regiões fiscais de PR e SC.`
        }
    }
}