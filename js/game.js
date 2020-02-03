class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = this.$canvas.getContext('2d');
    this.fish = new Fish(this);
    this.ground = new Ground(this);
    this.control = new Controls(this);
    // this.hook = new Hook(this);
    this.hookArr = [];
    this.seaweedArr = [];
    this.bg = new Bg(this);
    this.speed = 2500;
    this.timer = 0;
  }

  paint() {
    this.clearScreen();
    this.bg.paint();
    this.ground.paint();
    this.hookArr.map(hook => {
      hook.paint();
    });
    this.seaweedArr.map(seaweed => {
      seaweed.paint();
    });
    this.fish.paint();
  }

  clearScreen() {
    this.context.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
  }

  start() {
    this.loop();
  }

  reset() {}

  runLogic(timestamp) {
    if (this.timer < timestamp - this.speed) {
      this.timer = timestamp;
      const positionX = this.$canvas.width;
      const hookHeight = Math.random() * (400 - 250) + 250;

      const hook = new Hook(this, positionX, 0, hookHeight);
      this.hookArr.push(hook);

      const seaweedHeight = this.$canvas.height - hookHeight - 150;

      const seaweedPositionY = this.$canvas.height - seaweedHeight;

      const seaweed = new Seaweed(this, positionX + 100, seaweedPositionY, seaweedHeight);
      this.seaweedArr.push(seaweed);
    }

    for (let i = 0; i < this.hookArr.length; i++) {
      this.hookArr[i].runLogic();
    }

    this.seaweedArr.map(seaweed => {
      seaweed.runLogic();
    });
    /*
    for (let i = 0; i < this.seaweedArr.length; i++) {
      this.seaweedArr[i].runLogic();
    }
    */

    this.fish.runLogic(timestamp);
  }

  loop(timestamp) {
    this.paint();
    this.runLogic(timestamp);
    window.requestAnimationFrame(timestamp => {
      this.loop(timestamp);
    });
    //window.requestAnimationFrame(this.loop);
  }
}

// checkCollision(){
//   if(this.fish.posY + this.fish.height >= this.ground.height{
//     gameIsRunning = false;
//   }

// checkCollision () {
//   const blockX = block.positionX;
//   const blockY = block.positionY;
//   const blockWidth = block.dimensions;
//   const blockHeight = block.dimensions;

//   const obstacleX = this.positionX;
//   const obstacleY = this.positionY;
//   const obstacleWidth = this.width;
//   const obstacleHeight = this.height;

//   if (
//     blockX + blockWidth > obstacleX &&
//     blockX < obstacleX + obstacleWidth &&
//     blockY + blockHeight > obstacleY &&
//     blockY < obstacleY + obstacleHeight
//   ) {
//     gameIsRunning = false;
//   }
// }
