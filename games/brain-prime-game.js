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

const getQuestion = () => {
  const question = getRandomInRange(2, 60);
  const correctAnswer = isPrimeNumber(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

const brainPrimeGame = (userName) => {
  const startMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  for (let round = 0; round < 3; round += 1) {
    const [question, correctAnswer] = getQuestion();
    const success = engine(startMessage, round, question, correctAnswer, userName);
    if (success === false) {
      break;
    }
  }
  return true;
};

export default brainPrimeGame;
