import getRandomInRange from '../utils.js';
import engine from '../index.js';

const startMessage = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateRound = () => {
  const question = getRandomInRange(1, 100);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer];
};

const brainEvenGame = () => engine(startMessage, generateRound);

export default brainEvenGame;
