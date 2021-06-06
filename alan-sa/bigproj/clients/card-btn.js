// let btnclose = document.querySelector(".close-btn")

// function openCard() {
//   let container = document.querySelector(".profile-card-container")

//   container.style.display = "flex"
// }

// function closeCard() {
//   let container = document.querySelector(".profile-card-container")

//   container.style.display = "none"
// }

// btnclose.addEventListener("click", closeCard)

// function openCard2() {
//   let client2 = document.querySelector("#client2")

//   client2.style.display = "flex"
// }

// function closeCard2() {
//   let client2 = document.querySelector("#client2")

//   client2.style.display = "none"
// }

import jsonData from ('../clients')

function card3() {
  let container = document.querySelector(".profile-card-container")
  let name1 = document.querySelector("#name1")
  let cpf1 = document.querySelector("#cpf1")
  let email1 = document.querySelector("#email1")
  let city1 = document.querySelector("#city1")

  container.style.display = "flex"
}

console.log(jsonData)