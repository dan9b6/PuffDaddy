class Seaweed extends Obstacle {
  paint() {
    const context = this.game.context;
    context.fillStyle = 'green';
    context.fillRect(this.posX, this.posY, 25, this.height);
  }
}
