const $canvas = document.querySelector('canvas');

const game = new Game($canvas);

game.start();

const start = document.getElementById('start-button');
start.addEventListener('click', () => {
  game.start();
});
