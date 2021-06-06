function calc(op) {
  var num1 = document.querySelector('#input-num1').value
  var num2 = document.querySelector('#input-num2').value

  if(num1 == "" || num2 == "") {
    alert("Insira um número para calcular")
  } else{

    if(op.value == "+") {
      res = parseInt(num1) + parseInt(num2)
    } else if(op.value == "-"){
      res = num1 - num2
    } else if(op.value == "/") {
      res = num1 / num2
    } else {
      if(op.value == "*") {
        res = num1 * num2
      }
    }
    
  }
  

  document.querySelector('#rescalc').innerHTML = res

}

function limpar() {

  document.querySelector('#input-num1').value = ""
  document.querySelector('#input-num2').value = ""
  document.querySelector('#rescalc').textContent = "Resultado"

}