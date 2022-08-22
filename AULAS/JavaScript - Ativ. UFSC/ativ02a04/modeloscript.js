/*
2) Escreva um programa que mostre o link da página web atual em uma janela do tipo
alert.

3) Crie um programa que apresente o protocolo utilizado em uma dada página web.

4) Escreva um programa que mostre o nome do navegador utilizado pelo usuário. (Dica:
Usar objeto Navigator )

*/

window.alert(document.URL)

//-------------------------------

function consultar() {
    let link = document.getElementById('link')
    let res = document.getElementById('res')
    let a = document.getElementById('a')
    a.getAttribute(`href='${link}'`)
    let b = a.protocol
    res.innerHTML = `${b}`
    link.value = ''
    link.focus()
}

//------------------------------

var navegador = document.getElementById('navegador')
var nav = ''
var getnav = navigator.userAgent
if (getnav.indexOf('Chrome') > -1) {
    nav = 'Google Chrome'
} else if (getnav.indexOf('Safari') > -1) {
    nav = 'Apple Safari'
} else if (getnav.indexOf('Opera') > -1) {
    nav = 'Opera'
} else if (getnav.indexOf("Firefox") > -1) {
    nav = 'Mozilla Firefox'
} else if (getnav.indexOf('MSIE') > -1) {
    nav = 'Internet Explorer'
}
navegador.innerHTML = `${nav}`

//-------------------------------

