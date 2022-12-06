import {
  getUserAnswer, getRandom2DigitNumber, showGameQuestionForUser, showCorrectAnswer,
} from '../utils/utils.js';
import startGame from '../index.js';

const calculation = (firstNumber, operation, secondNumber) => {
  let result;

  if (operation === '+') {
    result = firstNumber + secondNumber;
  } if (operation === '-') {
    result = firstNumber - secondNumber;
  } if (operation === '*') {
    result = firstNumber * secondNumber;
  }

  return result;
};

const operations = ['+', '-', '*'];

const calc = () => {
  const randomFirstNumber = getRandom2DigitNumber();
  const randomSecondNumber = getRandom2DigitNumber();
  const randomOperation = operations[Math.floor(Math.random() * operations.length)];

  showGameQuestionForUser(`${randomFirstNumber} ${randomOperation} ${randomSecondNumber}`);
  const realAnswer = String(calculation(randomFirstNumber, randomOperation, randomSecondNumber));
  const userAnswer = getUserAnswer();

  showCorrectAnswer(realAnswer, userAnswer);

  return realAnswer === userAnswer;
};

const startCalcGame = () => {
  const question = 'What is the result of the expression?';
  startGame(calc, question);
};

export default startCalcGame;
