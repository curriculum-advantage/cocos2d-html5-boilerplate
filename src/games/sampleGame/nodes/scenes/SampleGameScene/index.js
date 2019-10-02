import { log } from '@curriculum-advantage/coconut';
import Scene from '../../../../../common/nodes/scenes/Scene';
import SampleGameLayer from '../../layers/SampleGameLayer';

class SampleGameScene extends Scene {
  constructor(questions) {
    super(questions);
    this.addLayers(SampleGameLayer, this.handleAttempt, this.startGame);
  }

  handleAttempt = () => {
    log('handle attempt coming soon!');
  };

  startGame = () => {
    /*
     * TODO: Potential solutions for common scenarios for different games:
     *
     * - No intro, simply invoke gameLayer.start()
     *
     * - Intro layer here with audio and animations via intro.start(). Add touch event listener for
     * skipping to game play — at which point we remove the intro layer, stop intro audio, and
     * invoke gameLayer.start()
     *
    */
    this.gameLayer.start();
  };
}

export default SampleGameScene;
