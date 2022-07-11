function somar() {
    var numero = document.getElementById('numero')
    var res = document.querySelector('textarea#res')
    var soma = 1

    if (numero.value.length == 0) {
        window.alert('Insira um número para somarmos.')
    } else {
        numero = Number(numero.value)
        res.innerHTML = ''

        for (soma; soma <= 10; soma++) {
            res.innerHTML += `${numero} x ${soma} = ${numero * soma} \n`
        }
    }
}