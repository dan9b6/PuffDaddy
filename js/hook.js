class Hook {
  constructor(game) {
    this.game = game;
    this.posX = this.game.$canvas.width;
    this.posY = 0;
    this.height = 0;
    this.speed = 1;
  }

  paint() {
    const context = this.game.context;
    context.fillStyle = 'gray';
    context.fillRect(this.posX, this.posY, 25, 150);
  }

  runLogic() {
    this.posX -= this.speed;
  }

  setRandomHeight() {
    this.height = Math.random() * 150;
  }
}
