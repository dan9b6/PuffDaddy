class Fish {
  constructor(game) {
    this.game = game;
    this.posX = 50;
    this.posY = 100;
    this.gravity = 1;
    this.moveUp = -25;
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
