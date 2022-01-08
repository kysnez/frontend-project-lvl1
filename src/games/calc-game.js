import getRandomNumber from '../random-numbers.js';
import driveToGame from '../index.js';

const gameRules = 'What is the result of the expression?';

const gameCheck = () => {
  const mathSign = getRandomNumber(1, 3);
  const numberOne = getRandomNumber(1, 10);
  const numberTwo = getRandomNumber(1, 10);
  let getQuestion = '';
  let correctAnswer = '';

  switch (mathSign) {
    case 1:
      getQuestion = String(`${numberOne} + ${numberTwo}`);
      correctAnswer = String(numberOne + numberTwo);
      break;

    case 2:
      getQuestion = String(`${numberOne} - ${numberTwo}`);
      correctAnswer = String(numberOne - numberTwo);
      break;

    case 3:
      getQuestion = String(`${numberOne} * ${numberTwo}`);
      correctAnswer = String(numberOne * numberTwo);
      break;

    default:
  }

  return [getQuestion, correctAnswer];
};

const calcGame = () => driveToGame(gameRules, gameCheck);

export default calcGame;
