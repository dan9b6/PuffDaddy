class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = this.$canvas.getContext('2d');
    this.fish = new Fish(this);
    this.ground = new Ground(this);
    this.control = new Controls(this);
    this.hook = new Hook(this);
    this.hookArr = [];
    this.seaweedArr = [];
    this.bg = new Bg(this);
    this.speed = 5000;
    this.timer = 0;
    //this.hookForChecking = new Hook(this, this.$canvas.width, 0, 250);
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

    // this.hookForChecking.runLogic();
    // this.hookForChecking.checkCollision();

    for (let i = 0; i < this.hookArr.length; i++) {
      this.hookArr[i].runLogic();
      this.hookArr[i].checkCollision();
    }

    this.seaweedArr.map(seaweed => {
      seaweed.runLogic();
      seaweed.checkCollision();
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

  // checkCollision () {
  //   if (
  //     blockX + blockWidth > obstacleX &&
  //     blockX < obstacleX + obstacleWidth &&
  //     blockY + blockHeight > obstacleY &&
  //     blockY < obstacleY + obstacleHeight
  //   ) {
  //     gameIsRunning = false;
  //   }

  loop(timestamp) {
    this.paint();
    this.runLogic(timestamp);
    window.requestAnimationFrame(timestamp => {
      this.loop(timestamp);
    });
  }

  paint() {
    this.clearScreen();
    this.bg.paint();
    this.ground.paint();
    //this.hookForChecking.paint();
    this.hookArr.map(hook => {
      hook.paint();
    });
    this.seaweedArr.map(seaweed => {
      seaweed.paint();
    });
    this.fish.paint();
  }
}
