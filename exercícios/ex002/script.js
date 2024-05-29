function verificaIdade() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('iano')
    var res = document.querySelector('p#res')


    if(fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        if(fsex[0].checked == 1) {
            genero = 'Homem'
        } else {
            genero = 'Mulher'
        }
        res.innerHTML = `Seu gênero é: ${genero}, e sua idade é ${idade}`
    }
}
