class Ground {
  constructor(game) {
    this.game = game;
    this.groundY = 550;
  }
  paint() {
    const context = this.game.context;

    context.fillStyle = 'yellow';
    context.fillRect(0, this.groundY, this.game.$canvas.width, 200);
  }
  checkCollision() {
    const fish = this.game.fish;
    const fishY = fish.posY;
    const fishR = fish.radius;

    if (fishY + fishR >= this.groundY) {
      this.game.reset();
    }
  }
}
