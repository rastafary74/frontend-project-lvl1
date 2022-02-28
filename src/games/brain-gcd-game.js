import getRandomInRange from '../utils.js';
import engine from '../index.js';

const startMessage = 'Find the greatest common divisor of given numbers.';

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return getGcd(b, a % b);
};

const generateRound = () => {
  const firstNum = getRandomInRange(1, 50);
  const secondNum = getRandomInRange(1, 50);
  const correctAnswer = String(getGcd(firstNum, secondNum));
  const question = `${firstNum} ${secondNum}`;
  return [question, correctAnswer];
};

export default () => engine(startMessage, generateRound);
