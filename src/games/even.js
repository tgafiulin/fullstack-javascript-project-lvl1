import { getUserAnswer, showCorrectAnswer, showGameQuestionForUser } from '../utils/utils.js';
import startGame from '../index.js';

const checkEvenNumber = (number) => number % 2 === 0;

const even = () => {
  const randomNumber = Math.round(Math.random() * 100);
  showGameQuestionForUser(`${randomNumber}`);

  const realAnswer = checkEvenNumber(randomNumber) ? 'yes' : 'no';
  const userAnswer = getUserAnswer();
  showCorrectAnswer(realAnswer, userAnswer);

  return realAnswer === userAnswer;
};

const startEvenGame = () => {
  const question = 'Answer "yes" if the number is even, otherwise answer "no".';
  startGame(even, question);
};

export default startEvenGame;
