import { checkAnswer, getRandom2DigitNumber } from '../utils/utils.js';

const progression = () => {
  const firstNumberProgression = getRandom2DigitNumber();
  const stepProgression = Math.ceil(Math.random() * 4);
  const indexAnswer = Math.floor(Math.random() * 10);
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

  console.log(`Question: ${row.join(' ')}`);
  return checkAnswer(realAnswer);
};

export default progression;
