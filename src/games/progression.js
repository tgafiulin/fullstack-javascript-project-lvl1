import {
  getRandomNumber,
} from '../utils/utils.js';
import startGame from '../index.js';

const generateProgression = ({
  firstNumberProgression, stepProgression, lengthProgression,
}) => {
  const row = [];

  for (let i = 0; i <= lengthProgression; i += 1) {
    const number = firstNumberProgression + i * stepProgression;
    row.push(number);
  }

  return row;
};

const getRoundData = () => {
  const firstNumberProgression = getRandomNumber(0, 99);
  const stepProgression = getRandomNumber(1, 3);
  const lengthProgression = getRandomNumber(5, 10);
  const indexAnswer = getRandomNumber(0, lengthProgression);

  const paramsForProgression = {
    firstNumberProgression, stepProgression, lengthProgression,
  };

  const row = generateProgression(paramsForProgression);

  const rightAnswer = String(row[indexAnswer]);
  row[indexAnswer] = '..';

  const question = `${row.join(' ')}`;

  return { rightAnswer, question };
};

const startGetProgressionNumberGame = () => {
  const question = 'What number is missing in the progression?';
  startGame(getRoundData, question);
};

export default startGetProgressionNumberGame;
