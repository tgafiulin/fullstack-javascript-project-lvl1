import readlineSync from 'readline-sync';
import { buildAnswerForMistake } from '../utils/utils.js';

const even = () => {
  const randomNumber = Math.round(Math.random() * 100);
  const realAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  console.log(`Question: ${randomNumber}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if (realAnswer === answer) {
    console.log('Correct!');
  } else {
    buildAnswerForMistake(realAnswer, userAnswer);
    return false;
  }

  return true;
};

export default even;
