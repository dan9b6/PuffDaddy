class Ground {
  constructor(game) {
    this.game = game;
    this.groundY = 560;
    this.height = 220;
    this.width = this.game.$canvas.width;
  }
  paint() {
    const groundUrl = '/images/ground.png';
    const ground = new Image();
    ground.src = groundUrl;
    this.game.context.drawImage(ground, 0, this.groundY, this.width, this.height);
  }
  checkCollision() {
    const fish = this.game.fish;
    const fishY = fish.posY;
    const fishR = fish.radius;
    if (fishY + fishR >= this.groundY) {
      console.log('dead');
      this.game.clearScreen();
      gameoverImg.style.display = 'block';
      playAgain.style.display = 'block';
      start.style.display = 'none';
      this.game.reset();
      this.game.finish = true;
    }
  }
}
