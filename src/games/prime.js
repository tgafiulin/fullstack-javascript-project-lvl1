import {
  getRandomNumber,
} from '../utils/utils.js';
import startGame from '../index.js';

const checkPrimeNumber = (number) => {
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

  return isPrime;
};

const isPrimeNumber = () => {
  const number = getRandomNumber(0, 99);
  const isPrime = checkPrimeNumber(number);
  const question = `${number}`;
  const rightAnswer = isPrime ? 'yes' : 'no';

  return { rightAnswer, question };
};

const startIsPrimeNumberGame = () => {
  const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  startGame(isPrimeNumber, question);
};

export default startIsPrimeNumberGame;
