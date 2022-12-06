import {
  getUserAnswer, showCorrectAnswer, getRandom2DigitNumber, showGameQuestionForUser,
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

const prime = () => {
  const number = getRandom2DigitNumber();

  const isPrime = checkPrimeNumber(number);

  showGameQuestionForUser(`${number}`);
  const realAnswer = isPrime ? 'yes' : 'no';

  const userAnswer = getUserAnswer();
  showCorrectAnswer(realAnswer, userAnswer);

  return realAnswer === userAnswer;
};

const startPrimeGame = () => {
  const question = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  startGame(prime, question);
};

export default startPrimeGame;
