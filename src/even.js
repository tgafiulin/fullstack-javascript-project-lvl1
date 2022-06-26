import readlineSync from 'readline-sync';

const isAnswerCorrect = (number, answer) => {
  if ((answer === 'yes' && number % 2 === 0) || (answer === 'no' && number % 2 !== 0)) {
    return true;
  }

  return false;
};

const buildAnswerForMistake = (answer) => {
  if (answer === 'yes') {
    return "'yes' is wrong answer ;(. Correct answer was 'no'.";
  }

  return "'no' is wrong answer ;(. Correct answer was 'yes'.";
};

const even = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const stepForWin = 3;
  let i = 0;

  while (i < stepForWin) {
    const randomNumber = Math.round(Math.random() * 100);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (isAnswerCorrect(randomNumber, answer)) {
      console.log('Correct!');
    } else {
      buildAnswerForMistake(answer);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    i += 1;
  }

  console.log(`Congratulations, ${name}!`);
};

export default even;
