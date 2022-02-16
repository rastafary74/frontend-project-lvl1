import getRandomInRange from '../src/games-lib.js';
import engine from '../src/index.js';

const getQuestion = () => {
  const question = getRandomInRange(1, 100);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer];
};

const brainEvenGame = (userName) => {
  const startMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
  for (let round = 0; round < 3; round += 1) {
    const [question, correctAnswer] = getQuestion();
    const success = engine(startMessage, round, question, correctAnswer, userName);
    if (success === false) {
      break;
    }
  }
  return true;
};

export default brainEvenGame;
