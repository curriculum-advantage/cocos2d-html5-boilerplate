import { log, createSprite } from '@curriculum-advantage/coconut';
import { playIntroAudio1, playIntroAudio2 } from '../../../lib/sampleGameAudio';

class SampleGameLayer extends cc.Layer {
  constructor(getQuestion, handleAttempt) {
    super();
    this.getQuestion = getQuestion;
    this.handleAttempt = handleAttempt;

    // TODO: Add nodes that should appear immediately here
    this.addPig();
  }

  addSprite(resource, posX, posY) {
    createSprite({
      parent: this,
      resource,
      position: [posX, posY],
    });
  }

  addPig() {
    this.addSprite('characters/pig.png', 200, 300);
  }

  addSubTheme1Sprites() {
    this.addSprite('characters/black-dog.png', 700, 300);
  }

  addSubTheme2Sprites() {
    this.addSprite('characters/brown-dog.png', 700, 300);
  }

  start() {
    // TODO: Add nodes that should appear only after game layer play starts here.
    // Start game layer animations, load first question, etc.
    if (window.resourceTemplate === 'subTheme1') {
      playIntroAudio1();
      this.addSubTheme1Sprites();
    } else {
      playIntroAudio2();
      this.addSubTheme2Sprites();
    }

    log('Starting game');
  }
}

export default SampleGameLayer;
