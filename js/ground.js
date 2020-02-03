class Ground {
  constructor(game) {
    this.game = game;
    // this.height = 200;
  }
  paint() {
    const context = this.game.context;

    context.fillStyle = 'yellow';
    context.fillRect(0, 550, this.game.$canvas.width, 200);
  }
}
