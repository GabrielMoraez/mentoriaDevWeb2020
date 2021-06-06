let password = document.querySelector("#inpt-password")
let passCheck = document.querySelector("#inpt-password-check")
let checkRes = document.querySelector("#checkRes")
let btn = document.querySelector("#btn-enviar")

function checkPassword () {
  checkRes.innerHTML = password.value == passCheck.value ? "OK" : "Senha diferente";

  if (checkRes.innerHTML === "OK") {
    checkRes.style.color = "green";
    checkRes.style.marginBottom = "0px"
    btn.disabled = false
  } else {
    checkRes.style.color = "red";
    checkRes.style.marginBottom = "0px"
  }
}

password.addEventListener('keyup', () => {
  if (password.value.length != 0) checkPassword();
})

passCheck.addEventListener('keyup', checkPassword);

//  -- CPF --

function formatarCampo(campoTexto) {
  campoTexto.value = mascaraCpf(campoTexto.value);
}
function mascaraCpf(valor) {
  return valor.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"\$1.\$2.\$3\-\$4");
}
