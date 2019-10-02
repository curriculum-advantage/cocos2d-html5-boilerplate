import { getSubTheme1Resources, getSubTheme2Resources } from '../../../../resource';

const getResourcesForTemplate = (template) => {
  switch (template) {
    case 'subTheme1': return getSubTheme1Resources();
    case 'subTheme2': return getSubTheme2Resources();
    default: throw new Error(`No resources available for template ${template}`);
  }
};

export default getResourcesForTemplate;
