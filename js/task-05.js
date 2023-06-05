const input = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output')

input.addEventListener('input', e => {
    const value = e.target.value
    nameOutput.textContent = value || "Anonymous";
})