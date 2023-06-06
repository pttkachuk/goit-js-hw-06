const dataForm = document.querySelector('.login-form');

dataForm.addEventListener('submit', handleDataFormSubmit);

function handleDataFormSubmit(e) {
    e.preventDefault();
    const { elements: { email, password }
    } = e.currentTarget;
    if (email.value === '' || password.value === '') {
        return alert("Please fill in all the fields!")
    }
    console.log(`Email: ${email.value}, Password:${password.value}`);
    e.currentTarget.reset();
}