import readlineSync from 'readline-sync';
import { buildAnswerForMistake, getRandom2DigitNumber } from '../utils/utils.js';

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }

  return getGcd(b, a % b);
};

const gcd = () => {
  const randomFirstNumber = getRandom2DigitNumber();
  const randomSecondNumber = getRandom2DigitNumber();

  console.log(`Question: ${randomFirstNumber} ${randomSecondNumber}`);
  const realAnswer = getGcd(randomFirstNumber, randomSecondNumber);
  const userAnswer = Number(readlineSync.question('Your answer: '));
  if (realAnswer === userAnswer) {
    console.log('Correct!');
  } else {
    buildAnswerForMistake(realAnswer, userAnswer);
    return false;
  }

  return true;
};

export default gcd;
