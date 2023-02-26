const inputEL = document.querySelector('input');
const divBoxesEl = document.querySelector('#boxes');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  const amount = inputEL.value;
  let createList = [];
  let sizeStep = 0;
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement('div');
    divEl.style.width = `${30 + sizeStep}px`;
    divEl.style.height = `${30 + sizeStep}px`;
    sizeStep += 10;
    divEl.style.backgroundColor = `${getRandomHexColor()}`;
    createList.push(divEl);
  };

  divBoxesEl.append(...createList);
}

function destroyBoxes() {
  divBoxesEl.innerHTML = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
