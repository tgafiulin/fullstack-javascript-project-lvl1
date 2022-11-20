import calc from './games/calc.js';
import even from './games/even.js';
import gcd from './games/gcd.js';
import progression from './games/progression.js';
import prime from './games/prime.js';
import greeting from './cli.js';

export const startCalcGame = () => {
  const name = greeting();
  console.log('What is the result of the expression?');
  startGame(calc, name);
}

export const startEvenGame = () => {
  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  startGame(even, name);
}

export const startGcdGame = () => {
  const name = greeting();
  console.log('Find the greatest common divisor of given numbers.');
  startGame(gcd, name);
}

export const startProgressionGame = () => {
  const name = greeting();
  console.log('What number is missing in the progression?');
  startGame(progression, name);
}

export const startPrimeGame = () => {
  const name = greeting();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  startGame(prime, name);
}

const startGame = (gameResult, name) => {
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
