import startGame from '../index.js';

const checkEvenNumber = (number) => number % 2 === 0;

const parityCheck = () => {
  const randomNumber = Math.round(Math.random() * 100);
  const question = `${randomNumber}`;
  const rightAnswer = checkEvenNumber(randomNumber) ? 'yes' : 'no';

  return { rightAnswer, question };
};

const startParityCheckGame = () => {
  const question = 'Answer "yes" if the number is even, otherwise answer "no".';
  startGame(parityCheck, question);
};

export default startParityCheckGame;
