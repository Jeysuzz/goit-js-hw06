const input = document.getElementById('validation-input');
console.log(input);
const length = parseInt(input.getAttribute('data-length'));


input.addEventListener('blur', () => {
  if (input.value.length === 0) {
    input.classList.remove('valid');
    input.classList.remove('invalid');
  } else if (input.value.length === length) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
});

