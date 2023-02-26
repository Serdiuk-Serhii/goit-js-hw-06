let counterValue = 0;
const valueEl = document.querySelector("#value");
const btnSub = document.querySelector('button[data-action="decrement"]');
const btnAdd = document.querySelector('button[data-action="increment"]');


btnSub.addEventListener("click", onClickBtnDecr);
btnAdd.addEventListener("click", onClickBtnIncr);

function onClickBtnDecr() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

function onClickBtnIncr() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}
