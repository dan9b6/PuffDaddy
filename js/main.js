const $canvas = document.querySelector('canvas');

const game = new Game($canvas);

const startImg = document.getElementById('startImg');
const gameoverImg = document.getElementById('gameoverImg');

const start = document.getElementById('start-button');
start.addEventListener('click', () => {
  startImg.style.display = 'none';
  gameoverImg.style.display = 'none';
  game.start();
  var audio = new Audio('/audio/audio.mp3');
  audio.play();
});
