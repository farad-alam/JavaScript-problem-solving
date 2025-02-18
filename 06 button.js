let button = document.getElementsByClassName("btn")

let buttonText = 0;
let handleClick = (e) => {
  buttonText += 1;
  button[0].innerHTML = buttonText;
};

button[0].addEventListener("click", handleClick)

