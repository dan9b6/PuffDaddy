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
    this.height = Math.random() * (400 - 250) + 250;
  }

  runLogic() {
    this.posX -= this.speed;
  }
}
