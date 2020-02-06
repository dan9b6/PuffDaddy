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
    // const context = this.game.context;
    // context.beginPath();
    // context.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
    // context.fillStyle = 'orange';
    // context.fill();
    // context.stroke();
    // context.closePath();

    const fishURL = '/images/fish.png';

    const fish = new Image();
    fish.src = fishURL;
    this.game.context.drawImage(fish, this.posX - 50, this.posY - 50, this.width, this.height);
  }
}
