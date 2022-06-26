import readlineSync from 'readline-sync';
import calc from './games/calc.js';
import even from './games/even.js';

const startGame = (gameName) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  let gameResult;

  switch (gameName) {
    case 'even':
      gameResult = even();
      break;
    case 'calc':
      gameResult = calc();
      break;
    default:
      gameResult = even();
  }

  if (!gameResult) {
    console.log(`Let's try again, ${name}!`);
    return;
  }

  console.log(`Congratulations, ${name}!`);
};

export default startGame;
