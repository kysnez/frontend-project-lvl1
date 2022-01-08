import getRandomNumber from './random-numbers.js';

const getNumProgress = () => {
  const firstNum = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 10);
  const changeNum = getRandomNumber(2, 10);
  let correctAnswer = 0;
  let addNum = firstNum;

  const lineLength = 10;
  const numLine = [];

  numLine.push(firstNum);

  for (let i = 2; i <= lineLength; i += 1) {
    if (i === changeNum) {
      numLine.push('..');
      addNum += step;
      correctAnswer = String(addNum);
    }
    addNum += step;
    numLine.push(addNum);
  }

  const separator = ' ';

  const getQuestion = numLine.join(separator);

  return [getQuestion, correctAnswer];
};

export default getNumProgress;
