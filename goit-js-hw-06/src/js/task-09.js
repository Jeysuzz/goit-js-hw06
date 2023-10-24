const bgChange = document.querySelector('.widget');
const bgBtn = document.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

bgBtn.addEventListener('click', () => {
  const bgHex = document.querySelector('.color');
  const bgDoc = document.querySelector('body');
  const randomColor = getRandomHexColor();
  bgDoc.style.backgroundColor = randomColor;
  bgHex.textContent = randomColor;
})