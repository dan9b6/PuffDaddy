class Bottle {
  constructor(game) {
    this.game = game;
    this.posX = 1100;
    this.posY = 100;
    this.width = 100;
    this.height = 100;
    this.gravityX = 1;
    this.gravityY = 1 / 5;
    this.interval = 750;
    this.lastBottle = 0;
    this.images = ['/images/bottle.png', '/images/bag.png'];
    this.n = Math.floor(Math.random() * 2);
    this.image = this.images[this.n];

    this.setRandomPosition();
  }

  checkCollision() {
    const fish = this.game.fish;
    const fishX = fish.posX;
    const fishY = fish.posY;
    const fishR = fish.radius;

    const bottleX = this.posX;
    const bottleW = this.width;
    const bottleH = this.height;

    const dx = Math.sqrt((fishX - bottleX) ** 2);
    const rx = fishR + bottleW / 2;

    const dy = Math.sqrt((fishY - bottleH) ** 2);
    const ry = fishR + bottleH;

    if (rx > dx && ry > dy) {
      console.log('Collision');
    } else if (rx < dx && ry < dy) {
    }
  }

  setRandomPosition() {
    this.posY = Math.random() * 250 + 100;
  }

  runLogic() {
    //console.log('im running');
    this.posY += this.gravityY;
    this.posX -= this.gravityX;
  }

  paint() {
    const bottleUrl = this.image;
    const bottle = new Image();
    bottle.src = bottleUrl;
    this.game.context.drawImage(bottle, this.posX, this.posY, this.width, this.height);
  }
}
