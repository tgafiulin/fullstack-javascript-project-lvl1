import { checkAnswer } from '../utils/utils.js';

const even = () => {
  const randomNumber = Math.round(Math.random() * 100);
  const realAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';
  console.log(`Question: ${randomNumber}`);

  return checkAnswer(realAnswer);
};

export default even;
