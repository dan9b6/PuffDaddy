class Seaweed extends Obstacle {
  checkCollision() {
    const fish = this.game.fish;
    const fishX = fish.posX;
    const fishY = fish.posY;
    const fishR = fish.radius;

    const obstX = this.posX;
    const obstY = this.posY;
    const obstW = this.width;
    const obstH = this.height;

    const canvasH = this.game.$canvas.height;

    const dx = Math.sqrt((fishX - obstX) ** 2);
    const rx = fishR + obstW / 2;

    const dy = Math.sqrt((fishY - canvasH) ** 2);
    const ry = fishR + obstH;

    const type = Seaweed.name;
    if (rx > dx && ry > dy) {
      this.game.reset();
      this.game.finish = true;
      console.log(type, 'Collision');
    } else if (rx < dx && ry < dy) {
    }
  }

  paint() {
    const context = this.game.context;
    context.fillStyle = 'green';
    context.fillRect(this.posX, this.posY, this.width, this.height);

    const seaweedUrl = '/images/seaweed.png';

    const seaweed = new Image();
    seaweed.src = seaweedUrl;
    this.game.context.drawImage(
      seaweed,
      this.posX - 35,
      this.posY - 50,
      this.width + 100,
      this.height + 100
    );
  }
}
