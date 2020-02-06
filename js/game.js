class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = this.$canvas.getContext('2d');

    this.hookArr = [];
    this.seaweedArr = [];
    this.bottleArr = [];
    this.speed = 1200;
    this.timer = 1000;
    // this.interval = 0;
    this.score = 10;
    this.highScore = 0;
    this.finish = true;
  }

  start() {
    this.reset();
    if (this.finish) {
      this.finish = !this.finish;
      this.loop();
    }
  }

  reset() {
    this.fish = new Fish(this);
    this.ground = new Ground(this);
    this.control = new Controls(this);
    this.hook = new Hook(this);
    this.bg = new Bg(this);
    if (this.highScore < this.score) {
      this.highScore = this.score;
    }
    this.score = 10;
    this.hookArr = [];
    this.seaweedArr = [];
    this.bottleArr = [];
    this.speed = 2000;
    this.timer = 1000;
    document.getElementById('highscore').innerHTML =
      'Highscore: ' + Math.floor(this.highScore / 10);
  }

  runLogic(timestamp) {
    if (this.timer < timestamp - this.speed) {
      this.timer = timestamp;
      const positionX = this.$canvas.width;
      const hookHeight = Math.random() * (450 - 250) + 250;

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

    this.bottleArr.map(bottle => {
      bottle.runLogic();
      bottle.checkCollision();
    });

    this.fish.runLogic(timestamp);
    this.ground.checkCollision();
    this.bottleAppearLogic();
  }

  loop(timestamp) {
    this.runLogic(timestamp);
    document.getElementById('timer').innerHTML = 'Score: ' + Math.floor(this.score / 10);
    if (!this.finish) {
      this.paint();
      const animationLoop = window.requestAnimationFrame(timestamp => {
        this.loop(timestamp);
        this.score += 1;
      });
    }
  }

  bottleAppearLogic() {
    if (this.score % 500 === 0) {
      const bottle = new Bottle(this);
      this.bottleArr.push(bottle);
    }
  }

  //PAINT SECTION

  paint() {
    this.clearScreen();
    this.bg.paint();
    this.seaweedArr.map(seaweed => {
      seaweed.paint();
    });
    this.hookArr.map(hook => {
      hook.paint();
    });
    this.bottleArr.map(bottle => {
      bottle.paint();
    });
    this.fish.paint();
    this.ground.paint();
  }

  clearScreen() {
    this.context.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
  }
}
