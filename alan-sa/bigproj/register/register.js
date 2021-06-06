function store() {
  let nameInpt = document.querySelector("#name-inpt").value
  let emailInpt = document.querySelector("#email-inpt").value
  let cpfInpt = document.querySelector("#cpf-inpt").value
  let pwordInpt = document.querySelector("#pword-inpt").value

  localStorage.setItem("login", emailInpt)
  localStorage.setItem("pword", pwordInpt)
  localStorage.setItem("name", nameInpt)
  localStorage.setItem("cpf", cpfInpt)

  window.location.href = "../index.html"
}