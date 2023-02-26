const btnChange = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const spanEl = document.querySelector('.color');


btnChange.addEventListener('click', handleBtnChangeColorClick);

function handleBtnChangeColorClick() {
  bodyEl.style.backgroundColor = randomColor();
  spanEl.textContent = randomColor();
}

const randomColor = function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
  

