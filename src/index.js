import 'core-js';

import { log, getParameterByName, setGlobals } from '@curriculum-advantage/coconut';
import {
  getQuestionSource,
  getSceneForTemplate,
  getResourcesForTemplate,
} from './common/lib/utils/setup';

const setDeviceData = () => {
  const { sys } = cc;
  window.IOS = sys.os === sys.OS_IOS;
};

const configDebug = () => {
  window.DEBUG = +getParameterByName('param1') === 1 || +getParameterByName('p1') === 1;
  log('Debug mode active');
};

const removeLoadingScreen = () => {
  if (!cc.sys.isNative && document.querySelector('#cocosLoading')) {
    document.body.removeChild(document.querySelector('#cocosLoading'));
  }
};

const configRetinaDisplay = () => {
  cc.view.enableRetina(true);
};

const configFullScreen = () => {
  const { sys } = cc;
  const { isMobile, browserType } = sys;
  const isNotBaidu = browserType !== sys.BROWSER_TYPE_BAIDU;
  const isNotWeChat = browserType !== sys.BROWSER_TYPE_WECHAT;
  const isNotChrome = browserType !== sys.BROWSER_TYPE_CHROME;
  const shouldEnable = isMobile && isNotBaidu && isNotWeChat && isNotChrome;
  if (shouldEnable) cc.view.enableAutoFullScreen(true);
};

const removeCocosLogo = () => {
  // eslint-disable-next-line no-underscore-dangle
  cc._loaderImage = '';
};

const completeConfig = () => {
  cc.director.setDisplayStats(false);
  cc.view.adjustViewPort(true);
  cc.view.setDesignResolutionSize(960, 720, cc.ResolutionPolicy.SHOW_ALL);
  cc.view.resizeWithBrowserSize(true);
};

const handleLoadError = (error, activityNumber) => {
  let message = error.errorMessage;
  if (!activityNumber) message = 'The "actid" key-value pair was not provided in the url\'s query string.';
  else if (error.status === 404) message = `The JSON file for activity ${activityNumber} could not be found.`;
  console.error(`Error at ${cc.loader.loadJson.name}: ${message}`);
};

const generateQuestions = ({ questionSource, embeddedQuestions, globals: { questionCount } }) => {
  const questionGenerator = getQuestionSource(questionSource, questionCount, embeddedQuestions);
  const questions = questionGenerator.getQuestions();
  log('questions: ', questions);
  return questions;
};

const loadGame = () => {
  const activityNumber = getParameterByName('actid');

  cc.loader.loadJson(`res/data/${activityNumber}.json`, (error, json) => {
    if (error) {
      handleLoadError(error, activityNumber);
    } else {
      const { globals, sceneTemplate } = json;
      setGlobals(globals);
      const questions = generateQuestions(json);
      const resources = getResourcesForTemplate(globals.resourceTemplate);
      const finishLoading = () => (
        cc.director.runScene(getSceneForTemplate(sceneTemplate, questions))
      );
      cc.LoaderScene.preload(resources, finishLoading, this);
    }
  });
};

window.startGame = () => {
  setDeviceData();
  configDebug();
  removeLoadingScreen();
  configRetinaDisplay();
  configFullScreen();
  removeCocosLogo();
  completeConfig();
  loadGame();
};
