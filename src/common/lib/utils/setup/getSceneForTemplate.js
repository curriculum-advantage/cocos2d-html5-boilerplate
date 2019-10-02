import SampleGameScene from '../../../../games/sampleGame/nodes/scenes/SampleGameScene';

const getSceneForTemplate = (template, questions) => {
  switch (template) {
    case 'sampleGame':
      return new SampleGameScene(questions);
    default:
      throw new Error(`No scene available for template ${template}`);
  }
};

export default getSceneForTemplate;
