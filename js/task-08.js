const dataForm = document.querySelector('.login-form');

dataForm.addEventListener('submit', handleDataFormSubmit);

function handleDataFormSubmit(e) {
    e.preventDefault();
    const { email, password } = e.currentTarget;
    if (email.value === '' || password.value === '') {
        return alert("Please fill in all the fields!")
    }
    e.currentTarget.reset()
}