
  const nameInput = document.getElementById('name-input');
  const nameOutput = document.getElementById('name-output');

  nameInput.addEventListener('input', function() {
    if (this.value) {
      nameOutput.textContent = this.value;
    } else {
      nameOutput.textContent = 'Anonymous';
    }
  });

