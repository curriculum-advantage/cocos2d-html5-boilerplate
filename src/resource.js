/*
 * Combine all resources that we want Cocos to preload for a specific game.
 *
 * Please read performance-checklist.md from the documentation before implementing preloading.
 *
 * This is specifically preloading, where you'll want to include only the spritesheets themselves
 * (plist and png files), along with audio files and background images. In other words, the preload
 * files imported here should not contain convenient constants for sprite paths. If you attempt to
 * reference actual paths from spritesheets in these files, you'll get a console error because
 * spritesheets will not have been loaded yet.
 */

import { commonResources, buildImageResources } from './common/lib/preloadedResources';
import {
  sampleGameResources,
  subTheme1Resources,
  subTheme2Resources,
} from './games/sampleGame/lib/preloadedResources';

// Combine common repository resources (e.g. start button) and any JSON image resources (e.g.
// background image, property lists and their associated PNG files), along with any additional
// template and/or activity resources that are passed in (e.g. audio resources, individual images).
const combineResources = (...resources) => {
  const resourceObject = resources.reduce((accumulator, resource) => (
    { ...accumulator, ...resource }
  ), { ...commonResources, ...buildImageResources() });

  return Object.values(resourceObject);
};

/*
 * Pass in common template resources, along with any activity-specific resources.
 * Export the function so that we only execute the code needed for the current game.
 */

export const getSubTheme1Resources = () => (
  combineResources(sampleGameResources, subTheme1Resources)
);

export const getSubTheme2Resources = () => (
  combineResources(sampleGameResources, subTheme2Resources)
);
