import getRandomInRange from '../src/games-lib.js';
import engine from '../src/index.js';

const getQuestion = () => {
  const progressionLength = getRandomInRange(5, 10);
  const starNumber = getRandomInRange(1, 30);
  const stepProgression = getRandomInRange(1, 10);
  const progressionArr = [starNumber];
  for (let i = 0; i <= progressionLength; i += 1) {
    const symbolOnPush = progressionArr[i] + stepProgression;
    progressionArr.push(symbolOnPush);
  }
  const positionQuestion = getRandomInRange(0, progressionLength - 1);
  const correctAnswer = progressionArr[positionQuestion];
  progressionArr[positionQuestion] = '..';
  const question = progressionArr.join(' ');
  return [question, String(correctAnswer)];
};

const brainProgressionGame = (userName) => {
  const startMessage = 'What number is missing in the progression?';
  for (let round = 0; round < 3; round += 1) {
    const [question, correctAnswer] = getQuestion();
    const success = engine(startMessage, round, question, correctAnswer, userName);
    if (success === false) {
      break;
    }
  }
  return true;
};

export default brainProgressionGame;
