function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColor = {
  body: document.querySelector('body'),
  button: document.querySelector('.change-color'),
  spanColor: document.querySelector('.color'),
  styleSheet: document.styleSheets[0],

  colorChange(randomColor) {
    this.body.style.backgroundColor = randomColor;
    this.spanColor.textContent = randomColor;
    const boxParaRule = [...this.styleSheet.cssRules].find(
      r => r.selectorText === '.color'
    );
    boxParaRule.style.setProperty('color', randomColor);
  },
};

changeColor.button.addEventListener('click', () => {
  changeColor.colorChange(getRandomHexColor());
});
