export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const showCorrectAnswer = (realAnswer, userAnswer) => {
  if (realAnswer === userAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${realAnswer}'.`);
  }
};

export const showGameQuestionForUser = (question) => {
  console.log(`Question: ${question}`);
};
