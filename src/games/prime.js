import { checkAnswer, getRandom2DigitNumber } from '../utils/utils.js';

const prime = () => {
  const number = getRandom2DigitNumber();

  let isPrime = true;

  if (number === 1) {
    isPrime = false;
  } else if (number > 1) {
    for (let i = 2; i <= Math.sqrt(number); i += 1) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
  }

  console.log(`Question: ${number}`);
  const realAnswer = isPrime ? 'yes' : 'no';

  return checkAnswer(realAnswer);
};

export default prime;
