const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', handleBtnSubmit);

function handleBtnSubmit(event) {
    event.preventDefault();
    const message = 'All fields must be filled!';
    const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert(message);
  }
    let result = {};
    result[`${email.name}`] = email.value;
    result[`${password.name}`] = password.value;
    
    console.log(result);
    event.currentTarget.reset();
}
