
function carregar () {
    var data = new Date()
    var hora = Number(data.getHours())
    console.log(hora)

    var texto = document.getElementById('texto')
    var imagem = document.getElementById('imagem')
    var body = document.getElementsByTagName('body') [0]

    if(hora > 5 && hora < 12) {
        console.log('Bom dia')
        body.style.backgroundColor = 'lightblue'
        texto.innerText = 'Agora são ' + hora + ' horas'
        imagem.src = 'images/morning-200.jpg'
    } else {
        if (hora < 18 && hora >= 12) {
        console.log('Boa tarde')
        body.style.backgroundColor = 'lightyellow'
        texto.innerText = 'Agora são ' + hora + ' horas'
        imagem.src = 'images/afternoon-200.jpg'
        } else {
            if (hora <= 23 && hora >= 0)
            console.log('Boa noite')
            body.style.backgroundColor = 'darkcyan'
            texto.innerText = 'Agora são ' + hora + ' horas'
            imagem.src = 'images/night-200.jpg'
        }
    }
}