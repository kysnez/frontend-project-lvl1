import readlineSync from 'readline-sync';

const rounds = 3;

const driveToGame = (gameRules, gameCheck) => {
  let winRounds = 0;
  console.log('Welcome to the Brain Games!');

  const nameUser = readlineSync.question('May I have your name?');

  console.log(`Hello, ${nameUser} !`);

  console.log(gameRules);

  for (let i = 0; i < rounds; i += 1) {
    const [getQuestion, correctAnswer] = gameCheck();
    console.log(`Question: ${getQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(
        `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`
      );
      console.log(`Let's try again, ${nameUser}!`);
      return;
    }
    console.log('Correct!');
    winRounds += 1;
  }

  if (winRounds === 3) {
    console.log(`Congratulations, ${nameUser}!`);
  }
};

export default driveToGame;
