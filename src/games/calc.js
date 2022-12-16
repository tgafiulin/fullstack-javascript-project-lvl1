import {
  getRandomNumber,
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

const solveExample = () => {
  const randomFirstNumber = getRandomNumber(0, 99);
  const randomSecondNumber = getRandomNumber(0, 99);
  const randomOperation = operations[Math.floor(Math.random() * operations.length)];

  const question = `${randomFirstNumber} ${randomOperation} ${randomSecondNumber}`;
  const rightAnswer = String(calculation(randomFirstNumber, randomOperation, randomSecondNumber));
  return { rightAnswer, question };
};

const startSolveExampleGame = () => {
  const question = 'What is the result of the expression?';
  startGame(solveExample, question);
};

export default startSolveExampleGame;
