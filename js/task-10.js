// Get the DOM elements
const input = document.querySelector('input[type="number"]');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

// Function to generate a random hex color
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// Function to create boxes
function createBoxes(amount) {
  // Clear any existing boxes
  boxesContainer.innerHTML = '';

  // Create boxes and add to boxesContainer
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    size += 10;
  }
}

// Event listener for Create button
createBtn.addEventListener('click', () => {
  const amount = parseInt(input.value);
  createBoxes(amount);
});

// Event listener for Destroy button
destroyBtn.addEventListener('click', () => {
  boxesContainer.innerHTML = '';
});
