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
    const fishX = this.game.fish.posX - 25;
    const fishY = this.game.fish.posY - 30;
    const fishWidth = this.game.fish.width - 60;
    const fishHeight = this.game.fish.height - 50;
    const bottleX = this.posX + 5;
    const bottleY = this.posY + 25;
    const bottleWidth = this.width - 50;
    const bottleHeight = this.height - 50;
    if (
      fishX + fishWidth > bottleX &&
      fishX < bottleX + bottleWidth &&
      fishY + fishHeight > bottleY &&
      fishY < bottleY + bottleHeight
    ) {
      if (this.game.fish.url === '/images/fish.png') {
        this.game.fish.width = this.game.fish.width + 25;
        this.game.fish.height = this.game.fish.height + 30;
        console.log('I am fuming mate! ');
        var audio = new Audio('/audio/bottle.mp3');
        audio.play();
      }
      this.game.fish.url = '/images/angryfish.png';
      setTimeout(() => {
        this.game.fish.url = '/images/fish.png';
        this.game.fish.width = 110;
        this.game.fish.height = 110;
      }, 5000);
    }
  }

  setback() {}

  setRandomPosition() {
    this.posY = Math.random() * 250 + 100;
  }

  runLogic() {
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
