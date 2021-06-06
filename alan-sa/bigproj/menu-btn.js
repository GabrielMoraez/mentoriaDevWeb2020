let btnClose = document.querySelector("#menu-icon")
let btnOpen = document.querySelector("#menu-closed-icon")
let menuOpen = document.querySelector("#menu")
let menuClose = document.querySelector("#menu-close")

btnClose.addEventListener("click", closeMNU)

function closeMNU() {
  let btnClose = document.querySelector("#menu-icon")
  let menuOpen = document.querySelector("#menu")
  let menuClose = document.querySelector("#menu-close")

  menuOpen.style.display = "none"
  menuClose.style.display = "flex"
}

btnOpen.addEventListener("click", openMNU)

function openMNU() {
  let btnOpen = document.querySelector("#menu-icon")
  let menuOpen = document.querySelector("#menu")
  let menuClose = document.querySelector("#menu-close")

  menuOpen.style.display = "block"
  menuClose.style.display = "none"
}