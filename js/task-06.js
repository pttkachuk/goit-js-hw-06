const input = document.querySelector('#validation-input');
const dataLength = document.querySelector('[data-length]')

input.addEventListener('blur', e => {
    const value = e.target.value;
    if (value.length === Number(input.dataset.length)) {
        e.target.classList.add('valid')
        e.target.classList.remove('invalid')
    } else {
        e.target.classList.remove('valid')
        e.target.classList.add('invalid')
    }
})

