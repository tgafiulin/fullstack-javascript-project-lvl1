import {
  getUserAnswer, showCorrectAnswer, getRandom2DigitNumber, showGameQuestionForUser,
} from '../utils/utils.js';
import startGame from '../index.js';

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }

  return getGcd(b, a % b);
};

const gcd = () => {
  const randomFirstNumber = getRandom2DigitNumber();
  const randomSecondNumber = getRandom2DigitNumber();

  showGameQuestionForUser(`Question: ${randomFirstNumber} ${randomSecondNumber}`);
  const realAnswer = String(getGcd(randomFirstNumber, randomSecondNumber));
  const userAnswer = getUserAnswer();
  showCorrectAnswer(realAnswer, userAnswer);

  return realAnswer === userAnswer;
};

const startGcdGame = () => {
  const question = 'Find the greatest common divisor of given numbers.';
  startGame(gcd, question);
};

export default startGcdGame;
