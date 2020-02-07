class Controls {
  constructor(game) {
    this.game = game;

    this.setControls();
  }
  setControls() {
    window.addEventListener('keydown', event => {
      event.preventDefault();
      switch (event.keyCode) {
        case 32:
          this.game.fish.moveUp();
          break;
      }
    });
  }
}
