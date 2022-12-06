import readlineSync from 'readline-sync';

export const getRandom2DigitNumber = () => Math.round(Math.random() * 100);

export const showCorrectAnswer = (realAnswer, userAnswer) => {
  if (realAnswer === userAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${realAnswer}'.`);
  }
};

export const getUserAnswer = () => readlineSync.question('Your answer: ');

export const showGameQuestionForUser = (question) => {
  console.log(`Question: ${question}`);
};
