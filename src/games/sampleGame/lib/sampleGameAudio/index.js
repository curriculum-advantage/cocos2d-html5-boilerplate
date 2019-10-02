import { playEffect } from '@curriculum-advantage/coconut';
import { start1, start2 } from '../constants';

export const playIntroAudio1 = () => {
  playEffect(start1);
};


export const playIntroAudio2 = () => {
  playEffect(start2);
};
