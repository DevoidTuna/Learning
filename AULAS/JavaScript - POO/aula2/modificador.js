function capitalizarObj(colecao, atributo = 0) {
    if(typeof colecao[0] == 'object') {
        let resultado = colecao.map(function(obj) {
            let letraInicial = obj[atributo].charAt(0).toUpperCase()
            let restoTexto = obj[atributo].slice(1)
            obj[atributo] = letraInicial + restoTexto
            return obj
        })
        console.log(resultado)
    } else {
        let resultado = colecao.map(function(obj) {
           let letraInicial = obj.charAt(0).toUpperCase()
           let restoTexto = obj.slice(1)
           obj = letraInicial + restoTexto
           return obj
        })
        console.log(resultado)
    }
}

function capitalizar(vetor) {
    let modificado = []
    for(let i = 0; i < vetor.length; i++) {
        let letraInicial = vetor[i].charAt(0).toUpperCase()
        let restoTexto = vetor[i].slice(1)
        let resultado = letraInicial + restoTexto

        modificado[i] = resultado
    }
    return modificado
}

function ordenar(colecao, attr) {
    return attr ?
    colecao.sort(function(a,b){
        return typeof a[attr] == 'number' ?
            a[attr] - b[attr] :
            a[attr].localeCompare(b[attr])
    }):
    colecao.sort(function(a,b){
        return typeof a == 'number' ?
            a - b :
            a.localeCompare(b)
    });
}

function caixaAlta(vetor) {
    let modificado = []
    for(let i = 0; i < vetor.length; i++) {
        modificado[i] = vetor[i].toUpperCase()
    }
    return modificado
}

export default {
    capitalizar: capitalizar,
    ordenar: ordenar,
    caixaAlta: caixaAlta,
    capitalizarObj: capitalizarObj
}