const inputEL = document.querySelector("#validation-input");

function checkInput() {
  inputEL.classList.add("invalid");

  if (inputEL.value.trim().length === Number(inputEL.getAttribute("data-length"))) {
    return inputEL.classList.replace("invalid", "valid");
  }
};

inputEL.addEventListener('blur', checkInput);
