function contar() {

// "Endereço" das caixas do Formulário //
    var txtinicio = document.getElementById('txtinicio')
    var txtfim = document.getElementById('txtfim')
    var txtpasso = document.getElementById('txtpasso')

// Valores das caixas do formulário //
    var inicio = Number(txtinicio.value)
    var fim = Number(txtfim.value)
    var passo = Number(txtpasso.value)

// Div Resultado //

    var res = document.getElementById('resultado')

// Filtro

    if(passo == 0) { // Se um input está vazio, ele retorna o valor numérico 0, não queremos isso...
        window.alert('O passo não pode ser 0')
    } else if(inicio >= fim) {
        window.alert('O início não pode ser maior que o fim da contagem')
    } else if(passo > (fim - inicio)) {
        window.alert('O passo não pode ser maior que a diferença entre o início e o fim da contagem')
    } else if ((fim - inicio) % passo != 0) {
        window.alert('Não devem haver restos na contagem')
    } else {
        res.innerHTML = ''
        for(var i = inicio; i <= fim; i += passo) {
            res.innerHTML = res.innerHTML + `${i} \u{1F449}`
        }
    }
}