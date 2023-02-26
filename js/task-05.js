const refs = {
    inputEl: document.querySelector('#name-input'),
    spanEl: document.querySelector('#name-output'),
};

refs.inputEl.addEventListener('input', handleTextInput)

function handleTextInput() {
    refs.spanEl.textContent = refs.inputEl.value.trim();
};

refs.inputEl.addEventListener('input', handleInputCheck )

function handleInputCheck() {
    if (refs.inputEl.value.trim() === "") {
        refs.spanEl.textContent = 'Anonymous';
    };
};
