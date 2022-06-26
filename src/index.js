import readlineSync from 'readline-sync';
import calc from './games/calc.js';
import even from './games/even.js';
import gcd from './games/gcd.js';
import progression from './games/progression.js';

const startGame = (gameName) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  let gameResult;
  let rule;

  switch (gameName) {
    case 'even':
      gameResult = even;
      rule = 'Answer "yes" if the number is even, otherwise answer "no".';
      break;
    case 'calc':
      gameResult = calc;
      rule = 'What is the result of the expression?';
      break;
    case 'gcd':
      gameResult = gcd;
      rule = 'Find the greatest common divisor of given numbers.';
      break;
    case 'progression':
      gameResult = progression;
      rule = 'What number is missing in the progression?';
      break;
    default:
      gameResult = even;
      rule = 'Answer "yes" if the number is even, otherwise answer "no".';
  }

  console.log(rule);

  const stepForWin = 3;
  let i = 0;

  while (i < stepForWin) {
    if (!gameResult()) {
      console.log(`Let's try again, ${name}!`);
      return;
    }

    i += 1;
  }

  console.log(`Congratulations, ${name}!`);
};

export default startGame;
