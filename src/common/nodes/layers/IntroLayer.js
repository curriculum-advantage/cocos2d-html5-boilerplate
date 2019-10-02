import { stopCurrentAudio } from '@curriculum-advantage/coconut';

class IntroLayer extends cc.Layer {
  init(completeIntro) {
    this.completeIntro = completeIntro;
    this.addListener();
  }

  addListener() {
    cc.eventManager.addListener({
      event: cc.EventListener.TOUCH_ONE_BY_ONE,
      swallowTouches: true,
      onTouchBegan: () => true,
      onTouchEnded: this.onTouchEnded,
    }, this);
  }

  onTouchEnded = () => {
    stopCurrentAudio(true);
    if (this.completeIntro) this.completeIntro();
    this.removeFromParent(true);
    return true;
  };
}

export default IntroLayer;
