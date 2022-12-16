import readlineSync from 'readline-sync';
import greeting from './cli.js';

const startGame = (getRoundData, gameQuestion) => {
  const name = greeting();
  console.log(gameQuestion);

  const gameSteps = 3;
  let i = 0;

  while (i < gameSteps) {
    const { rightAnswer, question: taskQuestion } = getRoundData();
    console.log(`Question: ${taskQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (rightAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    i += 1;
  }

  console.log(`Congratulations, ${name}!`);
};

export default startGame;
