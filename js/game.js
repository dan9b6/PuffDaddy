class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = this.$canvas.getContext('2d');
    this.fish = new Fish(this);
    this.ground = new Ground(this);
    this.control = new Controls(this);
    // this.hook = new Hook(this);
    this.hookArr = [];
    this.bg = new Bg(this);
    this.speed = 1500;
    this.timer = 0;
  }

  paint() {
    this.clearScreen();
    this.bg.paint();
    this.ground.paint();
    this.hookArr.map(hook => {
      hook.paint();
    });
    this.fish.paint();
    // this.seaweed.paint();
    // this.bait.paint();
  }

  clearScreen() {
    this.context.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
  }

  reset() {}

  runLogic(timestamp) {
    if (this.timer < timestamp - this.speed) {
      this.timer = timestamp;
      this.hookArr.push(new Hook(this));
      console.log(this.hookArr);
    }

    for (let i = 0; i < this.hookArr.length; i++) {
      this.hookArr[i].runLogic();
    }
  }

  start() {
    this.loop();
  }

  loop(timestamp) {
    this.paint();
    this.runLogic(timestamp);
    this.gravity(timestamp);
    window.requestAnimationFrame(timestamp => {
      this.loop(timestamp);
    });
    //window.requestAnimationFrame(this.loop);
  }

  // getObstacles();

  gravity(timestamp) {
    this.fish.posY += this.fish.gravity;
  }

  moveUp() {
    this.fish.posY += this.fish.moveUp;
  }
}
