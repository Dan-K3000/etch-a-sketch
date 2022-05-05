const sketch = document.querySelector('.sketch');

function createGrid(rows, cols) {
  sketch.style.setProperty('--grid-rows', rows);
  sketch.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    const cell = document.createElement('div');
    sketch.appendChild(cell).classList.add('cell');
  };
};

createGrid(16, 16);

const pixels = document.querySelectorAll('.cell');

pixels.forEach((cell) => {
  cell.addEventListener('mouseover', (e) => {
    const pixel = e.target;
    if(pixel.getAttribute('style') != 'background: black;'){
      pixel.setAttribute('style', 'background: black;');
    }
    else{
      pixel.removeAttribute('style');
    }
  });
});
