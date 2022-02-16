import readlineSync from 'readline-sync';

const showMessage = (message) => {
  console.log(message);
};

const engine = (startMessage, round, question, correctAnswer, userName) => {
  if (round === 0) {
    showMessage(startMessage);
  }
  const answer = readlineSync.question(`Question: ${question}: `);
  showMessage(`Your answer: ${answer}`);
  if (correctAnswer !== answer) {
    showMessage(`${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    showMessage(`Let's try again, ${userName}!`);
    return false;
  }
  console.log('Correct!');
  if (round === 2) {
    showMessage(`Congratulations, ${userName}!`);
  }
  return true;
};

export default engine;
