const inputEL = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

spanEl.style.fontSize = inputEL.value + 'px';

inputEL.addEventListener("input", (event) => {
        spanEl.style.fontSize = event.target.value + 'px'
})

