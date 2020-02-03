class player(){
  constructor(){
  }
  context.fillStyle = 'red';
  context.fillRect(10, 400, 50, 50);

window.addEventListener('keydown', event => {
  event.preventDefault();

  // React based on the key pressed
  switch (event.keyCode) {
    case 32:
      console.log('up');
      player.moveUp();
  }
});

}