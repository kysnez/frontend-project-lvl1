import getRandomNumber from '../random-numbers.js';
import driveToGame from '../index.js';
import getGreatestDivisor from '../getGreatestDivisor.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

export const gameCheck = () => {
  const numberOne = getRandomNumber(1, 100);
  const numberTwo = getRandomNumber(1, 100);
  const getQuestion = String(`${numberOne} ${numberTwo}`);
  const greatestDivisor = getGreatestDivisor(numberOne, numberTwo);
  const correctAnswer = String(greatestDivisor);
  return [getQuestion, correctAnswer];
};

export const gcdGame = () => driveToGame(gameRules, gameCheck);
