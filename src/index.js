import greeting from './cli.js';

const startGame = (gameResult, question) => {
  const name = greeting();
  console.log(question);

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
