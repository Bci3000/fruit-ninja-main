let game = null;

window.onload = () => {
  game = new Phaser.Game({
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    backgroundColor: '#222222',
    scene: {
      preload,
      create
    }
  });
};

function preload() {
  this.load.image('logo', 'https://labs.phaser.io/assets/sprites/phaser3-logo.png');
}

function create() {
  this.add.image(400, 300, 'logo');
}
