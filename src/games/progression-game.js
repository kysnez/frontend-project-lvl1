import driveToGame from '../index.js';
import { getNumProgress } from '../getNumProgress.js';

const gameRules = 'What number is missing in the progression?';

const gameCheck = () => {
  const [getQuestion, correctAnswer] = getNumProgress();
  return [getQuestion, correctAnswer];
};

export const gameProgress = () => driveToGame(gameRules, gameCheck);
