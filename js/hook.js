class Hook extends Obstacle {
  paint() {
    const context = this.game.context;
    context.fillStyle = 'gray';
    context.fillRect(this.posX, this.posY, 25, this.height);
  }
}
