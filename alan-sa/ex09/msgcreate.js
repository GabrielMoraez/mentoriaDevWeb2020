  let enterMsgSend = document.querySelector("#inpt-msg")
  
  enterMsgSend.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      document.querySelector("#audio-icon").click()
    }
  })

function sendmsg() {
  let inptValue = document.querySelector("#inpt-msg").value 
  let inpt = document.querySelector("#inpt-msg")
  let newMsg = document.createElement("div")
  let newMsgContent = document.createTextNode(inptValue)
  let msgContainer = document.querySelector("#allconv-box")
  
  if (inptValue === ""){
    return
  } else {
    newMsg.appendChild(newMsgContent)

    inpt.value = ""

    newMsg.classList.add("conv-L")

    msgContainer.insertAdjacentElement("beforeend", newMsg)
  }
}
let inptEmpty = document.querySelector("#inpt-msg")

inptEmpty.addEventListener("keyup", changeIcon)

function changeIcon() {
  let icon = document.querySelector("#audio-icon")
  
  if (inptEmpty.value !== "") {
    icon.classList.value = "";
    icon.classList.add("fas") 
    icon.classList.add("fa-paper-plane")
  } if (inptEmpty.value === "") {
    icon.classList.value = "";
    icon.classList.add("fas") 
    icon.classList.add("fa-microphone")
  } else {
    console.log('qual foi po')
  }
}
