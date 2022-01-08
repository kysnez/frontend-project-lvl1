import { getRandomNumber } from "../random-numbers.js";
import driveToGame from "../index.js";

const isEven = (number) => number % 2 === 0;

export const gameCheck = () => {
  const number = getRandomNumber(1, 100);
  const getQuestion = number;
  const correctAnswer = isEven(number) ? "yes" : "no";
  return [getQuestion, correctAnswer];
};

const gameRules = "Answer 'yes' if the number is even, otherwise answer 'no'.";

export const gameEven = () => driveToGame(gameRules, gameCheck);
