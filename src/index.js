import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const engine = (startMessage, userName, generateRound) => {
  for (let round = 0; round < numberOfRounds; round += 1) {
    const [question, correctAnswer] = generateRound();
    if (round === 0) {
      console.log(startMessage);
    }
    const answer = readlineSync.question(`Question: ${question}: `);
    console.log(`Your answer: ${answer}`);
    if (correctAnswer !== answer) {
      console.log(`${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return false;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
  return true;
};

export default engine;
