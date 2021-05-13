function check10() {
    let n = document.querySelector('#mq10').value

    if (n < 10) {
    document.querySelector('#res1').innerHTML = 'ERRO!! Insira um número maior que 10'
}   else {
    document.querySelector('#res1').innerHTML = `O NUMERO ${n} É MAIOR QUE 10`
}
}

function contardeate() {
    let n1 = document.querySelector('#numde').value
    let n2 = document.querySelector('#numate').value
    let res = n1
    while (res < n2) {
        res = n1 ++
        document.querySelector('#res3').innerHTML += ' ' + res
    
    }

}

function contar10() {
    let res = ' '
    var i = 0
    do {
        i ++
        res += i + ' '
    } while (i < 10)

    document.querySelector('#res2').innerHTML = res
}

function par() {
	for(let i = 0; i < 10; i++) {
		if(i % 2 == 0) {
			document.querySelector('#respar').innerHTML += ` ${i}`
		}
	}
}

function impar() {
	for(let i = 0; i < 10; i++) {
		if(i % 2 !== 0) {
			document.querySelector('#resimpar').innerHTML += ` ${i}`
		}
	}
}