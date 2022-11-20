import { checkAnswer, getRandom2DigitNumber } from '../utils/utils.js';

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

  return checkAnswer(realAnswer);
};

export default gcd;
