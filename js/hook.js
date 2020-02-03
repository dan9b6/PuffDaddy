class Hook {
  constructor(game) {
    this.game = game;
    this.posX = this.game.$canvas.width;
    this.posY = 0;
    this.height = 0;
    this.speed = 2;

    this.setRandomHeight();
  }

  paint() {
    const context = this.game.context;
    context.fillStyle = 'gray';
    context.fillRect(this.posX, this.posY, 25, this.height);
  }

  setRandomHeight() {
    this.height = Math.random() * (230 - 50) + 50;
  }

  runLogic() {
    this.posX -= this.speed;
  }

  setRandomHeight() {
    this.height = Math.random() * 150;
  }
}
