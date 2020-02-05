class Ground {
  constructor(game) {
    this.game = game;
    this.groundY = 560;
    this.height = 220;
    this.width = this.game.$canvas.width;
  }
  paint() {
    // const context = this.game.context;

    // context.fillStyle = 'yellow';
    // context.fillRect(0, this.groundY, this.game.$canvas.width, 200);

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
      this.game.reset();
      this.game.finish = true;
    }
  }
}
