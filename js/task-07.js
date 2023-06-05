const inputControl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

inputControl.addEventListener("input", e => {
    text.style.fontSize = `${e.currentTarget.value}px`
})