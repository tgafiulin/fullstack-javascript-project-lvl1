import readlineSync from 'readline-sync';

export const getRandom2DigitNumber = () => Math.round(Math.random() * 100);

export const checkAnswer = (realAnswer) => {
  const userAnswer = readlineSync.question('Your answer: ');

  if (String(realAnswer) === userAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${realAnswer}'.`);
    return false;
  }

  return true;
};
