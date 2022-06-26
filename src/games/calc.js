import readlineSync from 'readline-sync';
import { buildAnswerForMistake, getRandom2DigitNumber } from '../utils/utils.js';

const getAnswer = (firstNumber, operation, secondNumber) => {
  switch (operation) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return firstNumber + secondNumber;
  }
};

const operations = ['+', '-', '*'];

const calc = () => {
  const randomFirstNumber = getRandom2DigitNumber();
  const randomSecondNumber = getRandom2DigitNumber();
  const randomOperation = operations[Math.floor(Math.random() * operations.length)];

  console.log(`Question: ${randomFirstNumber} ${randomOperation} ${randomSecondNumber}`);
  const realAnswer = getAnswer(randomFirstNumber, randomOperation, randomSecondNumber);
  const userAnswer = Number(readlineSync.question('Your answer: '));
  if (realAnswer === userAnswer) {
    console.log('Correct!');
  } else {
    buildAnswerForMistake(realAnswer, userAnswer);
    return false;
  }

  return true;
};

export default calc;
