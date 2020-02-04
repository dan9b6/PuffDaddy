class Bg {
  constructor(game) {
    this.game = game;
  }
  paint() {
    // const context = this.game.context;
    // context.fillStyle = 'lightblue';
    // context.fillRect(0, 0, $canvas.width, $canvas.height);

    const bgUrl = '/images/background.png';

    const bg = new Image();
    bg.src = bgUrl;
    this.game.context.drawImage(bg, 0, 0, $canvas.width, $canvas.height);
  }
}
