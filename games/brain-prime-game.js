import getRandomInRange from '../src/games-lib.js';
import engine from '../src/index.js';

const isPrimeNumber = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const question = getRandomInRange(2, 60);
  const correctAnswer = isPrimeNumber(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const brainPrimeGame = (userName) => {
  const startMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return engine(startMessage, userName, generateRound);
};

export default brainPrimeGame;
