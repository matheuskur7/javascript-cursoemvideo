function tabuada() {
    let num = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0) {
        window.alert('Digite um número no campo')
    } else {
        let n = Number(num.value)
        tab.innerHTML = ''
        for(c = 1; c <= 10; c ++) {
            let item = document.createElement('option')
            item.value = `tab${c}`
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}