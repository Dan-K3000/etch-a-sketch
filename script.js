const sketch = document.querySelector('.sketch');

function createGrid(rows, cols) {
  sketch.style.setProperty('--grid-rows', rows);
  sketch.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement('div');
    sketch.appendChild(cell).classList.add('cell');
  };
};

createGrid(16, 16);
