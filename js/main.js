const $canvas = document.querySelector('canvas');

const game = new Game($canvas);

const startImg = document.getElementById('startImg');
const gameoverImg = document.getElementById('gameoverImg');

const start = document.getElementById('start-button');
start.addEventListener('click', () => {
  startImg.style.display = 'none';
  gameoverImg.style.display = 'none';
  game.start();
  game.audioStart();
});

const playAgain = document.getElementById('playagain-button');
playAgain.addEventListener('click', () => {
  location.reload();
});
