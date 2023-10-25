const increase = document.querySelector('[data-action="increment"]');
const decrease = document.querySelector('[data-action="decrement"]');

let counterValue = 0;

increase.addEventListener ('click', () => {
    counterValue += 1;
    value.textContent = counterValue;
});

decrease.addEventListener ('click', () => {
    counterValue -= 1;
    value.textContent = counterValue;
})