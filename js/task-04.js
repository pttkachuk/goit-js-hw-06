const incrementBtn = document.querySelector('[data-action="increment"]')
const decrementBtn = document.querySelector('[data-action="decrement"]')
const counterValue = document.querySelector('#value')
let value = 0;

incrementBtn.addEventListener("click", handleIncBtn)
decrementBtn.addEventListener("click", handleDecBtn)

function handleIncBtn() {
    value += 1
    counterValue.textContent = value
}

function handleDecBtn() {
    value -= 1
    counterValue.textContent = value
}