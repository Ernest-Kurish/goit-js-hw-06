
  const input = document.querySelector('#validation-input');

  input.addEventListener('blur', () => {
    const enteredLength = input.value.length;
    const requiredLength = parseInt(input.dataset.length, 10);

    if (enteredLength === requiredLength) {
      input.classList.remove('invalid');
      input.classList.add('valid');
    } else {
      input.classList.remove('valid');
      input.classList.add('invalid');
    }
  });

