import readlineSync from 'readline-sync';
import greeting from './cli.js';
import {
  showGameQuestionForUser, showCorrectAnswer,
} from './utils/utils.js';

const startGame = (gameResult, question) => {
  const name = greeting();
  console.log(question);

  const gameSteps = 3;
  let i = 0;

  while (i < gameSteps) {
    if (!gameResult()) {
      console.log(`Let's try again, ${name}!`);
      return;
    }

    i += 1;
  }

  console.log(`Congratulations, ${name}!`);
};

export const startMainGame = (realAnswer, question) => {
  showGameQuestionForUser(question);

  const userAnswer = readlineSync.question('Your answer: ');

  showCorrectAnswer(realAnswer, userAnswer);

  return realAnswer === userAnswer;
};

export default startGame;
