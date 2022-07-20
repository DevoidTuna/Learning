// Seleciona o bloco de cada código e executa no node (F8)

//01
function cumprimentar(nome) {
    let cumprimentarRes = `Olá, ${nome}!`
    console.log(cumprimentarRes)
}
cumprimentar("João")
//--------------------------------------------------------
//2
function converterAnosParaDias(idade) {
    let dias = idade * 365
    console.log(dias)
}
converterAnosParaDias(2)
//--------------------------------------------------------
//3
function calcularSalarioLiquido(horas, valor) {
    salario = (horas * valor)
    desconto = (salario / 10) * 3
    salario -= desconto
    console.log(`Salário igual a R$ ${salario}`)
}
calcularSalarioLiquido(180, 60)
//--------------------------------------------------------
//4
function receberNomeDoMes(mes) {
    let meses = [
        "janeiro",
        "fevereiro",
        "março",
        "abril",
        "maio",
        "junho",
        "julho",
        "agosto",
        "setembro",
        "outubro",
        "novembro",
        "dezembro",
    ]
    mes -= 1
    if (mes > 11) { 
        console.log("Insira um mês válido") 
    } else { 
        console.log(meses[mes]) 
    }
}
receberNomeDoMes(12)
//--------------------------------------------------------
//5
function maiorOuIgual(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        console.log('false')
    } else if (x < y){
        console.log("Primeiro valor é menor que o segundo.")
    } else {
        console.log('true')
    }
}
maiorOuIgual(2, "1")
maiorOuIgual(2, 1)
//--------------------------------------------------------
//6
function inverso(valor) {
    if (valor === true) {
        console.log(false)
    } else if (valor === false) {
        console.log(true)
    } else if (typeof valor === 'number') {
        console.log(valor * -1)
    } else {
        console.log(`booleano ou número esperados, mas o parâmetro é do tipo ${typeof valor}`)
    }
}
inverso("3")
inverso(3)
inverso(true)
//--------------------------------------------------------
//7
//nao entendi o enunciado, vi a solução e ainda não faz
//sentido pra mim, segue solulção abaixo:
function estaEntre(min, max, numero, inclusivo = false) {
    if (inclusivo) {
        return numero >= min && numero <= max;
    } else {
        return numero > min && numero < max;
    }
}
estaEntre(10, 100, 50)
//--------------------------------------------------------
//8
function multiplicar(n1, n2) {
    valor = 0
    for(n2; n2 > 0; n2--) {
        valor += n1
    }
    console.log(valor)
}
multiplicar(5, 10)
//--------------------------------------------------------
//9
function repetir(valor, repeticao) {
    let arr = []
    for(repeticao; repeticao > 0; repeticao--) {
        arr.push(valor)
    }
    console.log(arr)
}
repetir(777, 10)
//--------------------------------------------------------
//10
function simboloMais(num) {
    res = ''
    for(num; num > 0; num--) {
        res += '+'
    }
    console.log(res)
}
simboloMais(4)