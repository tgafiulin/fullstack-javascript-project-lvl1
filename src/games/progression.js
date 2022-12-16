import {
  getRandomNumber,
} from '../utils/utils.js';
import startGame from '../index.js';

const generateProgression = ({
  firstNumberProgression, stepProgression, lengthProgression, indexAnswer,
}) => {
  const row = [];
  let realAnswer;

  for (let i = 0; i <= lengthProgression; i += 1) {
    const number = firstNumberProgression + i * stepProgression;
    if (i === indexAnswer) {
      realAnswer = number;
      row.push('..');
    } else {
      row.push(number);
    }
  }

  return { row, rightAnswer: String(realAnswer) };
};

const getProgressionNumber = () => {
  const firstNumberProgression = getRandomNumber(0, 99);
  const stepProgression = getRandomNumber(1, 3);
  const lengthProgression = getRandomNumber(5, 10);
  const indexAnswer = getRandomNumber(0, lengthProgression);

  const paramsForProgression = {
    firstNumberProgression, stepProgression, lengthProgression, indexAnswer,
  };

  const { row, rightAnswer } = generateProgression(paramsForProgression);

  const question = `${row.join(' ')}`;

  return { rightAnswer, question };
};

const startGetProgressionNumberGame = () => {
  const question = 'What number is missing in the progression?';
  startGame(getProgressionNumber, question);
};

export default startGetProgressionNumberGame;
