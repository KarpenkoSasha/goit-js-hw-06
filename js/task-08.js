const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', formSubmit);

function formSubmit(event) {
    event.preventDefault();

    const { email, password } = event.target.elements;

    if (email.value === "" || password.value === "") {
        return alert("Заповніть всі поля!");
    }
 
    const formValue = {
        email: email.value,
        password: password.value,
    };

    console.log(formValue);
    event.target.reset();
};