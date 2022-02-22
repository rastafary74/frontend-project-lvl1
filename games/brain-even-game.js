import getRandomInRange from '../src/games-lib.js';
import engine from '../src/index.js';

const generateRound = () => {
  const question = getRandomInRange(1, 100);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer];
};

const brainEvenGame = (userName) => {
  const startMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
  return engine(startMessage, userName, generateRound);
};

export default brainEvenGame;
