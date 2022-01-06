import { getRandomNumber } from "../random-numbers.js";
import { primeCheck } from "../primeCheck.js";
import driveToGame from "../drive.js";

const gameRules =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

export const gameCheck = () => {
  const getQuestion = getRandomNumber(1, 10);
  const correctAnswer = primeCheck(getQuestion);
  return [getQuestion, correctAnswer];
};

export const gamePrime = () => driveToGame(gameRules, gameCheck);
