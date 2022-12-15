import {
  getRandomNumber,
} from '../utils/utils.js';
import startGame, { startMainGame } from '../index.js';

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
  const realAnswer = String(getGcd(randomFirstNumber, randomSecondNumber));

  return startMainGame(realAnswer, question);
};

const startFindGcdGame = () => {
  const question = 'Find the greatest common divisor of given numbers.';
  startGame(findGcd, question);
};

export default startFindGcdGame;
