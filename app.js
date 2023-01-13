window.onload = () => {
  //VARIABLES
  const pattern = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
  ];
  const simpleColors = [
    'black',
    'silver',
    'gray',
    'white',
    'maroon',
    'red',
    'purple',
    'fuchsia',
    'teal',
    'aqua',
    'navy',
    'lime',
    'yellow',
  ];
  const colorText = document.getElementById('color');
  const button = document.querySelector('.special-button');
  const main = document.querySelector('.main');
  let mode = {
    hex: document.getElementById('hex'),
    simple: document.getElementById('simple') || 'Simple',
  };
  let currentMode = mode.hex || 'Hex';

  //CODE
  function createColor(pattern, colors, mode) {
    let newColor = '#';
    if (mode.textContent === 'Hex') {
      for (let index = 0; index < 6; index++) {
        newColor += pattern[Math.floor(Math.random() * pattern.length)];
      }
      return newColor;
    } else if (mode.textContent === 'Simple') {
      newColor = colors[Math.floor(Math.random() * colors.length)];
      return newColor;
    }
  }

  mode.simple.addEventListener('click', () => {
    currentMode = mode.simple;
    mode.simple.classList.add('active');
    mode.hex.classList.remove('active');
  });

  mode.hex.addEventListener('click', () => {
    currentMode = mode.hex;
    mode.simple.classList.remove('active');
    mode.hex.classList.add('active');
  });

  button.addEventListener('click', () =>
    setTimeout(function () {
      let newColor = createColor(pattern, simpleColors, currentMode);
      main.style.setProperty('--color-Selected', newColor);
      colorText.textContent = newColor;
    }, 100)
  );
};
