function verMais() {
  let itens = document.querySelector("#ver-mais")
  let btn = document.querySelector("#btn-vermais")
  let btnmenos = document.querySelector("#btn-vermenos")

  itens.style.display = "flex"
  btn.style.display = "none"
  btnmenos.style.display = "flex"
}

let btn = document.querySelector("#btn-vermais")

btn.addEventListener("click", verMais)

function verMenos() {
  let itensmenos = document.querySelector("#ver-mais")
  let btnmenos = document.querySelector("#btn-vermenos")
  let btn = document.querySelector("#btn-vermais")

  itensmenos.style.display = "none"
  btnmenos.style.display = "none"
  btn.style.display = "flex"
}

let btnmenos = document.querySelector("#btn-vermenos")

btnmenos.addEventListener("click", verMenos);