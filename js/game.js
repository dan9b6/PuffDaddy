class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = this.$canvas.getContext('2d');

    this.hookArr = [];
    this.seaweedArr = [];
    this.speed = 2000;
    this.timer = 1000;
    this.interval = 0;
    this.currentTime = 0;
    this.finish = true;
  }

  start() {
    this.reset();
    this.updateTimer();
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
    this.highScore = new Timer(this);

    this.hookArr = [];
    this.seaweedArr = [];
    this.speed = 2000;
    this.timer = 1000;
    this.currentTime = 0;
  }

  updateTimer() {
    this.interval = setInterval(() => {
      document.getElementById('timer').innerHTML = 'Score: ' + this.currentTime;
      return (this.currentTime += 1);
    }, 2000);
  }

  // LOGIC AND LOOP

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

    this.highScore.updateHighScore();
    this.highScore.setHighScore();
    this.fish.runLogic(timestamp);
    this.ground.checkCollision();
  }

  loop(timestamp) {
    //console.log(this.finish);
    this.paint();
    this.runLogic(timestamp);
    if (!this.finish) {
      const animationLoop = window.requestAnimationFrame(timestamp => {
        this.loop(timestamp);
      });
    }
    // else {
    //   window.cancelAnimationFrame(animationLoop);
    // }
  }

  //PAINT SECTION

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
}
