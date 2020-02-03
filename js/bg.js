class Bg {
  constructor(game) {
    this.game = game;
  }
  paint() {
    const context = this.game.context;
    context.fillStyle = 'lightblue';
    context.fillRect(0, 0, $canvas.width, $canvas.height);
  }
}
