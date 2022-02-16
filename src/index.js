import readlineSync from 'readline-sync';

const showMessage = (message) => {
  console.log(message);
};

const generateRound = (startMessage, round, question, correctAnswer, userName) => {
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

const engine = (startMessage, userName, getQuestion) => {
  for (let round = 0; round < 3; round += 1) {
    const [question, correctAnswer] = getQuestion();
    const success = generateRound(startMessage, round, question, correctAnswer, userName);
    if (success === false) {
      break;
    }
  }
  return true;
};

export default engine;
