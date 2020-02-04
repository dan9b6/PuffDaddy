class Timer {
  constructor(game) {
    this.game = game;
    this.timer = 0;
  }

  addTimer() {
    this.timer += 1;
  }

  clearTimer() {
    this.timer = 0;
  }
}
