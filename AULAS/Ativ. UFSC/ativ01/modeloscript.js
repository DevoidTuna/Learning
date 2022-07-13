/*
1) Escreva um programa para exibir o dia e a hora atuais no seguinte formato:
Horário: 6 PM : 40m : 28s
*/


function relogio() {
    var horatxt = document.getElementById('hora')
    var agora = new Date()
    //hora = agora.getHours()
    minuto = agora.getMinutes()
    segundo = agora.getSeconds()
    hora = 11
    var am_pm = 'AM'
    if (hora > 12) {
            hora -= 12
            am_pm = 'PM'
        } else if (hora > 0 && hora < 12) {
            am_pm = 'AM'
        } else if (hora == 12) {
            am_pm = 'PM'
        } else {
            hora = 12
            am_pm = 'AM'
        }

    if (minuto < 10) {minuto = '0' + minuto}
    if (segundo < 10) {segundo = '0' + segundo}

    horatxt.innerHTML = `${hora} ${am_pm} : ${minuto}m : ${segundo}s`
    setInterval(relogio, 1000)
}