
function calcMais() {
    let n1 = document.querySelector('#num1').value
    let n2 = document.querySelector('#num2').value

    var res1 = Number(n1) + Number(n2)

    document.querySelector('.res1').innerHTML = `O resultado é ${res1}`
}

function calcMenos() {
    let n1 = document.querySelector('#num3').value
    let n2 = document.querySelector('#num4').value

    var res1 = Number(n1) - Number(n2)

    document.querySelector('.res2').innerHTML = `O resultado é ${res1}`
}

function calcVezes() {
    let n1 = document.querySelector('#num5').value
    let n2 = document.querySelector('#num6').value

    var res1 = Number(n1) * Number(n2)

    document.querySelector('.res3').innerHTML =  `O resultado é ${res1}`
}

function quemeh() {
    let nome = document.querySelector('#input-nome').value
    let idade = document.querySelector('#input-idade').value
    let local = document.querySelector('#input-local').value

    document.querySelector('.res4').innerHTML = `Seu nome é ${nome}, sua idade é ${idade}, e você mora em ${local}.`
}

function add() {
    let nome = document.querySelector('#table-nome').value

    document.querySelector('.res5').innerHTML += `<span> | ${nome} </span>`
}

function addnum() {
    let num = document.querySelector('#input-num1').value
    
    document.querySelector('.res6').innerText += `| ${num} |`
}