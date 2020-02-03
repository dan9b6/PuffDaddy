class Ground {
  constructor(game) {
    this.game = game;
  }
  paint() {
    const context = this.game.context;

    context.fillStyle = 'yellow';
    context.fillRect(0, 250, 500, 50);
  }
}
