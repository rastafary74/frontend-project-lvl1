import getRandomInRange from '../utils.js';
import engine from '../index.js';

const startMessage = 'Find the greatest common divisor of given numbers.';
const gcd = (a, b) => {
  if (!b) {
    return a;
  }
  return gcd(b, a % b);
};

const generateRound = () => {
  const firstNum = getRandomInRange(1, 50);
  const secondNum = getRandomInRange(1, 50);
  const correctAnswer = gcd(firstNum, secondNum);
  const question = `${firstNum} ${secondNum}`;
  return [question, String(correctAnswer)];
};

const brainGCDGame = () => engine(startMessage, generateRound);

export default brainGCDGame;
