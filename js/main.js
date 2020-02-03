const $canvas = document.querySelector('canvas');
const context = $canvas.getContext('2d');

function background() {
  context.fillStyle = 'white';
  context.fillRect(0, 0, 400, 800);
}

context.fillStyle = 'white';
context.fillRect(0, 0, 400, 800);

context.fillStyle = 'red';
context.fillRect(10, 400, 50, 50);
