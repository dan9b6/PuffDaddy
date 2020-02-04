class Seaweed extends Obstacle {
  checkCollision() {
    //this are all the variables we need for the fish
    const fish = this.game.fish;
    const fishX = fish.posX;
    const fishY = fish.posY;
    const fishR = fish.radius;

    //lets check all variables for our obstacles
    const obstX = this.posX;
    const obstY = this.posY;
    const obstW = this.width;
    const obstH = this.height;

    const seaweedSpecial = this.game.$canvas.height - obstY;
    const canvasH = this.game.$canvas.height;

    //lets first check if we are getting al the values that we need
    //console.log('fish', fishX, fishY, fishR);
    //console.log('obstacle', obstX, obstY, obstW);

    //we will need to compare the distance between fish and osbtacle with
    //the distance between radius and width of object

    const dx = Math.sqrt((fishX - obstX) ** 2);
    const rx = fishR + obstW / 2;

    const dy = Math.sqrt((fishY - canvasH) ** 2);
    const ry = fishR + obstH;

    // console.log(dx, rx);
    // console.log(dy, ry);
    const type = Seaweed.name;
    if (rx > dx && ry > dy) {
      this.game.reset();
      console.log(type, 'Collision');
    } else if (rx < dx && ry < dy) {
      //console.log(type, 'No collision');
    }
  }

  paint() {
    const context = this.game.context;
    context.fillStyle = 'green';
    context.fillRect(this.posX, this.posY, this.width, this.height);
  }
}
