const refs = {
    inputEl: document.querySelector('#name-input'),
    spanEl: document.querySelector('#name-output'),
};

refs.inputEl.addEventListener('input', handleTextInput)

function handleTextInput() {
    refs.spanEl.textContent = refs.inputEl.value.trim();
};

refs.inputEl.addEventListener('blur', handleInputBlur )

function handleInputBlur() {
    if (refs.inputEl.value === "") {
        refs.spanEl.textContent = 'Anonymous';
    };
};
