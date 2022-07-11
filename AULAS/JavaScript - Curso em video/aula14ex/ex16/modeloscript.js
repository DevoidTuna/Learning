function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var res = document.getElementById('res')
    res.innerHTML = ''

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar.'
    } else {
        res.innerHTML = 'Contando: <br>'
        inicio = Number(inicio.value)
        fim = Number(fim.value)
        passo = Number(passo.value)

        if (passo <= 0) {
            window.alert('Passo Inválido! Considerando PASSO 1.')
            passo = 1
        }
        if (inicio < fim) { // Contagem progressiva
            while (inicio <= fim) {
                res.innerHTML += `${inicio}\u{1F449}`
                inicio += passo
            }
        } else { // Contagem regressiva
            while (inicio >= fim) {
                res.innerHTML += `${inicio}\u{1F449}`
                inicio -= passo
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}