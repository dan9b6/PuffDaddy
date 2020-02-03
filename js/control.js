class Controls {
  constructor(game) {
    this.game = game;

    this.setControls();
  }
  setControls() {
    window.addEventListener('keydown', event => {
      // Stop the default behavior (moving the screen to the left/up/right/down)
      event.preventDefault();
      // React based on the key pressed
      switch (event.keyCode) {
        case 32:
          this.game.moveUp();
          break;
      }
    });
  }
}
