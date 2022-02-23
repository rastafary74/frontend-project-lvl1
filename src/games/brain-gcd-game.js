import getRandomInRange from '../utils.js';
import engine from '../index.js';

const startMessage = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
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

const brainGCDGame = () => engine(startMessage, generateRound);

export default brainGCDGame;
