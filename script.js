const element = document.querySelector(".greeting");
const button = document.getElementById("greetingButton");

let index = 0;

const array = ['World', 'FEFU', 'FEIP'];

button.addEventListener("click", () => {
    index++;
    if (index > 2) index = 0;
    element.textContent = `Hello, ${array[index]}!`;
});
