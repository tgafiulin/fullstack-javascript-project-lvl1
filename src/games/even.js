import readlineSync from 'readline-sync';
import { buildAnswerForMistake } from '../utils/utils.js';

const isAnswerCorrect = (number, answer) => {
  if ((answer === 'yes' && number % 2 === 0) || (answer === 'no' && number % 2 !== 0)) {
    return true;
  }

  return false;
};

const even = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const stepForWin = 3;
  let i = 0;

  while (i < stepForWin) {
    const randomNumber = Math.round(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (isAnswerCorrect(randomNumber, answer)) {
      console.log('Correct!');
    } else {
      buildAnswerForMistake(answer, answer === 'yes' ? 'no' : 'yes');
      return false;
    }

    i += 1;
  }

  return true;
};

export default even;
