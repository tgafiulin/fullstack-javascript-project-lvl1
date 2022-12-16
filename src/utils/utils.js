export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

export const showCorrectAnswer = (rightAnswer, userAnswer) => {
  if (rightAnswer === userAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  }
};

export const showGameQuestionForUser = (question) => {
  console.log(`Question: ${question}`);
};
