import readlineSync from 'readline-sync';

const numberOfRounds = 3;

const engine = (startMessage, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(startMessage);
  for (let round = 0; round < numberOfRounds; round += 1) {
    const [question, correctAnswer] = generateRound();
    const answer = readlineSync.question(`Question: ${question}: `);
    console.log(`Your answer: ${answer}`);
    if (correctAnswer !== answer) {
      console.log(`${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default engine;
