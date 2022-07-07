function carregar() {
    var msg = document.getElementById('msg')
    var imagem = document.getElementById('imagem')
    var titulo = document.getElementById('titulo')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    
    if (hora < 10) {hora = '0' + hora}
    if (minuto < 10) {minuto = '0' + minuto}
    if (segundo < 10) {segundo = '0' + segundo}

    msg.innerHTML = `Agora são ${hora}:${minuto}:${segundo} horas.`


    if (hora >= 6 && hora < 12) {
        titulo.innerText = 'Bom dia!'
        imagem.src = 'manha.jpg'
        document.body.style.background = '#bfac00'
    } else if (hora >= 12 && hora <= 18){
        titulo.innerText = 'Boa tarde!'
        imagem.src = 'tarde.jpg'
        document.body.style.background = '#db6300'
    } else {
        titulo.innerText = 'Boa noite!'
        imagem.src = 'noite.jpg'
        document.body.style.background = '#020852'
    }
}
setInterval(carregar, 10)