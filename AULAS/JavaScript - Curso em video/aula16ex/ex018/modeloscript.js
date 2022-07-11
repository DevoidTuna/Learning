var numero = document.getElementById('numero')
var res = document.getElementById('res')
var cadastrados = document.getElementById('cadastrados')
var maior = document.getElementById('maior')
var menor = document.getElementById('menor')
var soma = document.getElementById('soma')
var media = document.getElementById('media')
n = []

function adicionar() {
    if (numero.value.length == 0 || Number(numero.value) > 100 || Number(numero.value) < 1) {
        window.alert('Gentileza informar um número válido.')
    } else {
        function addtxt(num) {
            num = Number(numero.value)
            res.innerHTML += `Número ${num} adicionado. \n`
            n.push(Number(numero.value))
            numero.value = ''
            cadastrados.innerHTML = ''
            maior.innerHTML = ''
            menor.innerHTML = ''
            soma.innerHTML = ''
            media.innerHTML = ''
        }
        if (n.includes(Number(numero.value))) { 
            window.alert('[ERRO] Número já adicionado.')
        } else {
            addtxt(numero)
        }
    }
}

function finalizar() {
    if (n.length == 0){
        window.alert('[ERRO] Gentileza informar um número antes de finalizar.')
    } else {
        function compararNumeros(a, b) {
            return a - b
        }
        n = n.sort(compararNumeros)
        var somaNumeros = Number(0)
        for(let i = 0; i < n.length; i++) {
            somaNumeros += n[i]
        }

        cadastrados.innerHTML = `Foram cadastrados ${n.length} números.`
        maior.innerHTML = `O maior número cadastrado foi ${n[n.length - 1]}.`
        menor.innerHTML = `O menor número cadastrado foi ${n[0]}.`
        soma.innerHTML = `Somando todos os valores, temos ${somaNumeros} números.`
        media.innerHTML = `A média dos valores é ${somaNumeros / n.length}.`
    }
}