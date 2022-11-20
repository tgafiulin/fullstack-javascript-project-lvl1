import { checkAnswer, getRandom2DigitNumber } from '../utils/utils.js';

const calculation = (firstNumber, operation, secondNumber) => {
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
  const realAnswer = calculation(randomFirstNumber, randomOperation, randomSecondNumber);

  return checkAnswer(realAnswer);
};

export default calc;
