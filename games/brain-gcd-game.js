import getRandomInRange from '../src/games-lib.js';
import engine from '../src/index.js';

const getQuestion = () => {
  const firstNum = getRandomInRange(1, 50);
  const secondNum = getRandomInRange(1, 50);
  const counter = firstNum > secondNum ? firstNum : secondNum;
  let correctAnswer;
  for (let i = counter; i >= 1; i -= 1) {
    if (firstNum % i === 0 && secondNum % i === 0) {
      correctAnswer = i;
      break;
    }
  }
  const question = `${firstNum} ${secondNum}`;
  return [question, String(correctAnswer)];
};

const brainGCDGame = (userName) => {
  const startMessage = 'Find the greatest common divisor of given numbers.';
  for (let round = 0; round < 3; round += 1) {
    const [question, correctAnswer] = getQuestion();
    const success = engine(startMessage, round, question, correctAnswer, userName);
    if (success === false) {
      break;
    }
  }
  return true;
};

export default brainGCDGame;
