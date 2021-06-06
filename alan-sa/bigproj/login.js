let submit = document.querySelector("#btn-login")
let inptLogin = document.querySelector("#login-inpt").value
let inptPword = document.querySelector("#pword-inpt").value

function loginCheck() {
  let storeLogin = localStorage.getItem("login")
  let storePword = localStorage.getItem("pword")
  let inptLogin = document.querySelector("#login-inpt").value
  let inptPword = document.querySelector("#pword-inpt").value
  let msgError = document.querySelector("#login-error")


  if(inptLogin === storeLogin && inptPword === storePword){
    console.log("TA ON")
    msgError.innerHTML = ""
    window.location.href = 'dashboard/index.html'
    return;
  } else {
    msgError.innerHTML = "Insira um email e senha válidos"
  }
}

submit.addEventListener('click', loginCheck)



