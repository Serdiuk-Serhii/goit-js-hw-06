let counterValue = 0;
const valueEl = document.querySelector("#value");

const btnSub = document.querySelector('button[data-action="decrement"]');

btnSub.addEventListener("click", onClickBtnDecr);

function onClickBtnDecr() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

const btnAdd = document.querySelector('button[data-action="increment"]');

btnAdd.addEventListener("click", onClickBtnIncr);

function onClickBtnIncr() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}
