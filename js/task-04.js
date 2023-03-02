const counterValue = document.querySelector('#value');
let count = 0;

document.querySelector('[data-action="increment"]').addEventListener('click', () => {
  count++;
  counterValue.textContent = count;
});

document.querySelector('[data-action="decrement"]').addEventListener('click', () => {
  count--;
  counterValue.textContent = count;
});
