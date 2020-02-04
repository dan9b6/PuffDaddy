class Obstacle {
  constructor(game, x, y, height) {
    this.game = game;
    this.posX = x;
    this.posY = y;
    this.width = 25;
    this.height = height;
    this.speed = 2;
  }

  setRandomHeight() {
    this.height = Math.random() * (900 - 100) + 200;
  }

  runLogic() {
    this.posX -= this.speed;
  }
}
