class Obstacle {
  constructor(game, x, y, height) {
    this.game = game;
    this.posX = x;
    this.posY = y;
    this.height = height;
    this.speed = 2;

    // this.setRandomHeight();
  }

  setRandomHeight() {
    this.height = Math.random() * (400 - 250) + 250;
  }

  runLogic() {
    this.posX -= this.speed;
  }
}
