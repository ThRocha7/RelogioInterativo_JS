function carregar(){
var msg = window.document.getElementById('msg')
var foto = document.getElementById('fotinha')
var agr = new Date()
var hora = agr.getHours()
msg.innerHTML = `Agora são ${hora} horas`

if (hora >= 0 && hora < 12){// manha
    foto.scr ='manha.png'
    window.document.body.style.background = '#e2cd9f'

} else if (hora >= 12 && hora <= 18){ //tarde
    foto.src ='tarde.png'
    window.document.body.style.background = '#b9846f'

} else {// noite
    foto.src ='noite.png'
    window.document.body.style.background = '#515154'

}
}