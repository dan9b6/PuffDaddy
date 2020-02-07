class Hook extends Obstacle {
  constructor(game, posX, posY, height, speed) {
    super(game, posX, posY, height, speed);
    this.width = 10;
  }

  checkCollision() {
    const fish = this.game.fish;
    const fishX = fish.posX;
    const fishY = fish.posY;
    const fishR = fish.radius;

    const obstX = this.posX;
    const obstY = this.posY;
    const obstW = this.width;
    const obstH = this.height;

    const dx = Math.sqrt((fishX - obstX) ** 2);
    const rx = fishR + obstW / 2;
    const dy = Math.sqrt((fishY + obstY) ** 2);
    const ry = fishR + obstH;

    const type = Hook.name;
    if (rx > dx && ry > dy) {
      this.game.reset();
      this.game.finish = true;
      var audio = new Audio('/audio/pop.mov');
      audio.play();
      this.game.clearScreen();
      gameoverImg.style.display = 'block';
      playAgain.style.display = 'block';
      start.style.display = 'none';
    } else if (rx < dx && ry < dy) {
    }
  }

  paint() {
    const context = this.game.context;
    context.fillStyle = '#4A2D05';
    context.fillRect(this.posX, this.posY, this.width, this.height - 35);
    const hookUrl = '/images/hook.png';
    const hook = new Image();
    hook.src = hookUrl;
    this.game.context.drawImage(
      hook,
      this.posX - 35,
      this.posY + this.height - 60,
      this.width + 90,
      100
    );
  }
}
