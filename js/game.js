class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = this.$canvas.getContext('2d');
    this.fish = new Fish(this);
    this.ground = new Ground(this);
    this.control = new Controls(this);
    this.hook = new Hook(this);
    this.timer = new Timer(this);
    this.hookArr = [];
    this.seaweedArr = [];
    this.bg = new Bg(this);
    this.speed = 3000;
    this.timer = 0;
    this.clock = 0;
    this.currentTime = 0;
  }

  clearScreen() {
    this.context.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
  }

  start() {
    this.loop();
    this.reset();
    this.updateTimer();
  }

  reset() {
    this.hookArr = [];
    this.seaweedArr = [];
  }

  updateTimer() {
    this.clock = setInterval(() => {
      document.getElementById('timer').innerHTML = 'Score: ' + this.currentTime;
      return (this.currentTime += 1);
    }, 1000);
  }

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
      this.hookArr[i].checkCollision();
    }

    this.seaweedArr.map(seaweed => {
      seaweed.runLogic();
      seaweed.checkCollision();
    });

    this.fish.runLogic(timestamp);
    this.ground.checkCollision();
  }

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
    this.hookArr.map(hook => {
      hook.paint();
    });
    this.seaweedArr.map(seaweed => {
      seaweed.paint();
    });
    this.fish.paint();
  }
}
