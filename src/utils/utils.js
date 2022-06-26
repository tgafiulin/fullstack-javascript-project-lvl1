export const getRandom2DigitNumber = () => Math.round(Math.random() * 100);

export const buildAnswerForMistake = (trueAnswer, falseAnswer) => {
  console.log(`'${falseAnswer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
};
