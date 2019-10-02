const buildIndividualImageResources = () => {
  const { bgImage } = window;
  return { bgImage };
};

const buildSpriteResources = () => {
  const { propertyLists = [] } = window;
  const propertyListExtension = 'plist';

  return propertyLists.reduce((accumulator, propertyListPath, i) => {
    const basePath = propertyListPath.slice(0, -propertyListExtension.length);
    const imagePath = `${basePath}png`;

    return {
      ...accumulator,
      [`spritePropertyList${i}`]: propertyListPath,
      [`spriteImage${i}`]: imagePath,
    };
  }, {});
};

const buildImageResources = () => ({
  ...buildIndividualImageResources(),
  ...buildSpriteResources(),
});

export default buildImageResources;
