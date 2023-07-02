import 'phaser';
import Init from './scenes/Init';
import { gameWidth, gameHeight } from './consts';

const config = {
  type: Phaser.AUTO,
  width: gameWidth,
  height: gameHeight,
  scene: Init,
  scale: {
    mode: Phaser.Scale.FIT
  }
};

new Phaser.Game(config);