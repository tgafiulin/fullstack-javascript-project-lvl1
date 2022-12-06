import {
  getUserAnswer, showCorrectAnswer, getRandom2DigitNumber, showGameQuestionForUser,
} from '../utils/utils.js';
import startGame from '../index.js';

const generateProgression = (firstNumberProgression, stepProgression, indexAnswer) => {
  const row = [];
  let realAnswer;

  for (let i = 0; i < 10; i += 1) {
    const number = firstNumberProgression + i * stepProgression;
    if (i === indexAnswer) {
      realAnswer = number;
      row.push('..');
    } else {
      row.push(number);
    }
  }

  return { row, realAnswer };
};

const progression = () => {
  const firstNumberProgression = getRandom2DigitNumber();
  const stepProgression = Math.ceil(Math.random() * 4);
  const indexAnswer = Math.floor(Math.random() * 10);

  const { row, realAnswer } = generateProgression(firstNumberProgression, stepProgression, indexAnswer);

  showGameQuestionForUser(`${row.join(' ')}`);
  const userAnswer = getUserAnswer();
  showCorrectAnswer(realAnswer, userAnswer);

  return realAnswer === userAnswer;
};

const startProgressionGame = () => {
  const question = 'What number is missing in the progression?';
  startGame(progression, question);
};

export default startProgressionGame;
