import { Howler } from 'howler';
import { playEffect, getCachedFrame } from '@curriculum-advantage/coconut';

class StartLayer extends cc.Layer {
  constructor(startGame) {
    super();
    this.startGame = startGame;
    this.setup();
  }

  setup() {
    this.addBackground();
    this.addStartButton();
    this.addListener();
  }

  addBackground() {
    const background = new cc.LayerColor(cc.color(128, 128, 128, 100));
    this.addChild(background);
  }

  addStartButton() {
    const { width, height } = cc.director.getWinSize();
    const startButton = new cc.Sprite(getCachedFrame('play.png'));
    startButton.setPosition(width / 2, height / 2);
    this.addChild(startButton);
  }

  addListener() {
    cc.eventManager.addListener({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      swallowTouches: true,
      onTouchBegan: () => true,
      onTouchEnded: this.onTouchEnded,
    }, this);
  }

  // Hacks needed for different devices. Each browser has its own audio requirements.
  enableAudio = () => {
    playEffect();
    if (('ctx' in Howler && Howler.ctx !== null)) Howler.ctx.resume();
  };

  onTouchEnded = () => {
    this.enableAudio();
    this.loadGame();
    return true;
  };

  loadGame = () => {
    this.startGame();
    this.removeFromParent(true);
  };
}

export default StartLayer;
