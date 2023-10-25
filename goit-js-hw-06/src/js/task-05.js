const inputName = document.querySelector('#name-input');
const outputName = document.querySelector('#name-output');

inputName.addEventListener('input', () => {
  const name = inputName.value.trim();
  if (name === '') {
    outputName.textContent = 'Anonymous';
  } else {
    outputName.textContent = name;
  }
});

