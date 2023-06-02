const listToWork = document.querySelectorAll(".item")
console.log(`Number of Categories: ${listToWork.length}`);
listToWork.forEach((el) => {
    console.log(`Category: ${el.firstElementChild.textContent}`);
    console.log(`Elements: ${el.lastElementChild.children.length}`);
})
