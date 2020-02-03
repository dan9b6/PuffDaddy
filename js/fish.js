class Fish {
  constructor(game) {
    this.game = game;
    this.posX = 50;
    this.posY = 100;
    // this.width = 40;
    // this.height = 40;
    this.velocity = 1;
    this.gravity = 1 / 50;
    this.moveUpDistance = -25;
  }

  // Movement of fish!

  moveUp() {
    // this.posY += this.moveUpDistance;
    this.velocity = -2;
    this.velocity = Math.max(this.velocity, -4);
  }

  runLogic() {
    this.velocity = Math.min(this.velocity + this.gravity, 1);
    this.posY += this.velocity;
  }

  paint() {
    const context = this.game.context;
    context.beginPath();
    context.arc(this.posX, this.posY, 20, 0, 2 * Math.PI);
    context.fillStyle = 'orange';
    context.fill();
    context.stroke();
    context.closePath();
  }
}
