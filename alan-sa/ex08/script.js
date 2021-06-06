function showDiv() {
  let div1 = document.querySelector("#div")
  
  if (div1.style.display == "block") {
    div1.style.display = "none";
  } else {
    div1.style.display = "block";
  } 
  window.event.preventDefault();
}

