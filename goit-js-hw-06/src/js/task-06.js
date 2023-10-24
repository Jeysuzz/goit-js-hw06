const input = document.querySelector('#validation-input');

input.addEventListener('blur', function() {
  const maxLength = parseInt(input.getAttribute('data-length'));
  const inputLength = input.value.length;

  if (inputLength === 0) {
    input.classList.remove('valid');
    input.classList.remove('invalid');
  } else if (inputLength < maxLength) {
    input.classList.add('invalid');
    input.classList.remove('valid');
  } else if (inputLength === maxLength) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  }
});