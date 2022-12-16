import {
  getRandomNumber,
} from '../utils/utils.js';
import startGame from '../index.js';

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }

  return getGcd(b, a % b);
};

const findGcd = () => {
  const randomFirstNumber = getRandomNumber(0, 99);
  const randomSecondNumber = getRandomNumber(0, 99);
  const question = `Question: ${randomFirstNumber} ${randomSecondNumber}`;
  const rightAnswer = String(getGcd(randomFirstNumber, randomSecondNumber));

  return { rightAnswer, question };
};

const startFindGcdGame = () => {
  const question = 'Find the greatest common divisor of given numbers.';
  startGame(findGcd, question);
};

export default startFindGcdGame;
