function ola() {
  let nome = document.querySelector('#input-nome').value
  alert(`Seja bem vindo, ${nome}!`)
}

function parimpar() {

  let n = document.querySelector('#input-num').value

  if(n % 2 == 0) {
    alert(`O número ${n} é par!`)
  } else {
    alert(`O número ${n} é impar`)
  }
}

function alternum(op) {
  var qntNum = document.querySelector('#input-alternum')

  if ( op == 'mais') {
    var nmr = parseInt(qntNum.value);
    qntNum.value = nmr + 1;
  } else {
    var nmr = parseInt(qntNum.value);
    qntNum.value = nmr - 1;
  }
}