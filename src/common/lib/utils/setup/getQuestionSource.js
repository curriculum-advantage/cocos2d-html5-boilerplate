import { createPseudorandomNumberGenerator, embeddedQuestionsGenerator } from '@curriculum-advantage/coconut';

const getQuestionSource = (name, requiredQuestionCount, availableQuestions = []) => {
  const numberGenerator = createPseudorandomNumberGenerator();

  const generateEmbeddedQuestions = (options = {}) => (
    embeddedQuestionsGenerator({
      numberGenerator,
      availableQuestions,
      requiredQuestionCount,
      ...options,
    })
  );

  // TODO: Add custom question generators here, organized under commented-out game type
  switch (name) {
    // Common
    case 'Embedded':
      return generateEmbeddedQuestions();
    case 'Embedded-Grouped':
      return generateEmbeddedQuestions({ groupedQuestions: true });
    case 'Embedded-Unique':
      return generateEmbeddedQuestions({ forceShuffledChoices: true });
    default:
      throw new Error(`No Question source available with name ${name}`);
  }
};

export default getQuestionSource;
