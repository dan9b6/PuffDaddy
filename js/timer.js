class Timer {
  constructor(game) {
    this.game = game;
    this.highScore = 0;
  }

  updateHighScore() {
    document.getElementById('highscore').innerHTML = 'Highscore: ' + this.highScore;
  }

  setHighScore() {
    //UNDERSTAND WHEN THE GAME IS RUNNING AND WHEN IT HAS STOPPED, AND COUNT ONLY IF THE GAME IS RUNNING
    console.log('CURRENT TIME', this.game.currentTime);

    localStorage.setItem('highscore', this.highScore);

    console.log('LOCAL STORAGE', localStorage.getItem('highscore'));

    if (this.game.currentTime > parseInt(localStorage.getItem('highscore'))) {
      this.highScore = this.game.currentTime;
      localStorage.setItem('highscore', this.game.currentTime);
    }
  }
}
