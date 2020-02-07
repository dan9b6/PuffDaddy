class Fish {
  constructor(game) {
    this.game = game;
    this.posX = 200;
    this.posY = 100;
    this.width = 110;
    this.height = 110;
    this.velocity = 2;
    this.gravity = 1 / 5;
    this.radius = 20;
    this.moveUpDistance = -40;
    this.puff = false;
    this.url = '/images/fish.png';
  }

  // Movement of fish!

  moveUp() {
    this.velocity = -4;
    this.velocity = Math.max(this.velocity, -4);
  }

  runLogic() {
    this.velocity = Math.min(this.velocity + this.gravity, 3);
    this.posY += this.velocity;
  }

  paint() {
    const context = this.game.context;

    const fish = new Image();
    fish.src = this.url;
    this.game.context.drawImage(fish, this.posX - 50, this.posY - 50, this.width, this.height);
  }
}
