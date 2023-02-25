const inputEL = document.querySelector('#font-size-control');
const spanEl = document.querySelector('#text');

inputEL.addEventListener("input", (event) => {
        spanEl.style.fontSize = event.target.value + 'px'
})

