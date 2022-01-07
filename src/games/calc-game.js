import { getRandomNumber } from "../random-numbers.js";
import driveToGame from "../index.js";

const gameRules = "What is the result of the expression?";

const gameCheck = () => {
  const mathSign = getRandomNumber(1, 3);
  const numberOne = getRandomNumber(1, 10);
  const numberTwo = getRandomNumber(1, 10);

  if (mathSign === 1) {
    const getQuestion = String(numberOne + " + " + numberTwo);
    const correctAnswer = String(numberOne + numberTwo);
    return [getQuestion, correctAnswer];
  }

  if (mathSign === 2) {
    const getQuestion = String(numberOne + " - " + numberTwo);
    const correctAnswer = String(numberOne - numberTwo);
    return [getQuestion, correctAnswer];
  }

  if (mathSign === 3) {
    const getQuestion = String(numberOne + " * " + numberTwo);
    const correctAnswer = String(numberOne * numberTwo);
    return [getQuestion, correctAnswer];
  }
};

export const calcGame = () => driveToGame(gameRules, gameCheck);
