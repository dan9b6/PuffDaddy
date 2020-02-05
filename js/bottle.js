class Bottle {
  constructor(game) {
    this.game = game;
    this.posX = 900;
    this.posY = 100;
    this.width = 140;
    this.height = 140;
    this.gravityX = 1;
    this.gravityY = 1 / 5;

    this.setRandomPosition();
  }

  checkCollision() {}

  setRandomPosition() {
    this.posY = Math.random() * 350 + 100;
    console.log(this.posY);
  }

  runLogic() {
    this.posY += this.gravityY;
    this.posX -= this.gravityX;
  }

  paint() {
    const bottleUrl = '/images/bottle.png';

    const bottle = new Image();
    bottle.src = bottleUrl;
    this.game.context.drawImage(bottle, this.posX, this.posY, this.width, this.height);
  }
}
