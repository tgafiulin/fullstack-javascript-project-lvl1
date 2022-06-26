import readlineSync from 'readline-sync';
import { buildAnswerForMistake, getRandom2DigitNumber } from '../utils/utils.js';

const progression = () => {
  const number = getRandom2DigitNumber();

  let isPrime = true;

  if (number === 1) {
    isPrime = false;
  } else if (number > 1) {
    for (let i = 2; i < Math.sqrt(number); i += 1) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
  }

  console.log(`Question: ${number}`);
  const realAnswer = isPrime ? 'yes' : 'no';
  const userAnswer = readlineSync.question('Your answer: ');
  if (realAnswer === userAnswer) {
    console.log('Correct!');
  } else {
    buildAnswerForMistake(realAnswer, userAnswer);
    return false;
  }

  return true;
};

export default progression;
