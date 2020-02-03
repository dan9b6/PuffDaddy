const $canvas = document.querySelector('canvas');

const game = new Game($canvas);

game.start();

// const context = $canvas.getContext('2d');
// const width = $canvas.width;
// const height = $canvas.height;

//BACKGROUND

// function drawBg() {
//   context.fillStyle = 'lightblue';
//   context.fillRect(0, 0, width, height);
// }

// function drawGround() {
//   context.fillStyle = 'yellow';Z
//   context.fillRect(0, 350, 300, 50);
// }

// const playerX = 50;
// const playerY = 250;

// function drawFish() {
//   context.beginPath();
//   context.arc(playerX, playerY, 20, 0, 2 * Math.PI);
//   context.fillStyle = 'orange';
//   context.fill();
//   context.stroke();
//   context.closePath();
// }

// function drawHook() {
//   context.fillStyle = 'gray';
//   context.fillRect(200, 0, 25, 250);
// }

// function update() {}

// function loop() {
//   drawBg();
//   drawGround();
//   drawFish();
//   drawHook();
// }

// loop();

// function draw() {
// }
