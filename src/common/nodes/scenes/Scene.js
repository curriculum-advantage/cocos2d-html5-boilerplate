import {
  BackgroundLayer,
  playBackgroundAudio,
  markDebugLoaded,
  updateDebugScore,
} from '@curriculum-advantage/coconut';
import { commonResources } from '../../lib/preloadedResources';
import IntroLayer from '../layers/IntroLayer';

import StartLayer from '../layers/StartLayer';

class Scene extends cc.Scene {
  static addSpriteFrames() {
    cc.spriteFrameCache.addSpriteFrames(commonResources.resourcesPropertyList);
    window.propertyLists.forEach((list) => cc.spriteFrameCache.addSpriteFrames(list));
  }

  constructor(questions) {
    super();
    this.questions = questions;
    this.questionIdx = 0;
    this.questionAttempts = 0;
    this.scores = [];
    Scene.addSpriteFrames();
    markDebugLoaded();

    // global variable for background audio played through entire game
    // if audio not played until after an intro, manually add to game layer's start() method instead
    if (window.bgAudio) playBackgroundAudio(window.bgAudio);
  }

  hasMoreQuestions() {
    const lastQuestionIndex = this.questions.length - 1;
    return this.questionIdx < lastQuestionIndex;
  }

  updateScore = (score) => {
    this.scores[this.questionIdx] = score;
    updateDebugScore(this.scores);
  };

  getQuestion = () => this.questions[this.questionIdx];

  getScore() {
    return this.scores.reduce((previous, current) => previous + current);
  }

  getMaxScore() {
    return this.questions.length * 2;
  }

  writeResults = () => window.normalExit(this.getScore(), this.getMaxScore());

  mastered() {
    return (this.getScore() / this.getMaxScore()) >= 0.7;
  }

  addBackgroundLayer() {
    this.bgLayer = new BackgroundLayer();
    this.addChild(this.bgLayer);
  }

  addGameLayer(GameLayer, handleAttempt, loadNextQuestion, addListener) {
    this.gameLayer = new GameLayer(
      this.getQuestion,
      handleAttempt,
      this.updateScore,
      loadNextQuestion,
      addListener,
    );
    this.addChild(this.gameLayer);
  }

  addStartLayer = (startGame) => {
    this.addChild(new StartLayer(startGame));
  };

  addIntroLayer = () => {
    this.introLayer = new IntroLayer();
    this.addChild(this.introLayer);
  };

  addLayers(GameLayer, handleAttempt, startGame, loadNextQuestion, addListener) {
    this.addBackgroundLayer();
    this.addGameLayer(GameLayer, handleAttempt, loadNextQuestion, addListener);
    this.addStartLayer(startGame);
    this.addIntroLayer();
  }
}

export default Scene;
