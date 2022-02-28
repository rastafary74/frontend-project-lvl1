import getRandomInRange from '../utils.js';
import engine from '../index.js';

const startMessage = 'What number is missing in the progression?';

const getProgression = (progressionLength, startNumber, step) => {
  const progression = [startNumber];
  for (let i = 0; i <= progressionLength; i += 1) {
    const symbolOnPush = progression[i] + step;
    progression.push(symbolOnPush);
  }
  return progression;
};

const generateRound = () => {
  const progressionLength = getRandomInRange(5, 10);
  const startNumber = getRandomInRange(1, 30);
  const stepProgression = getRandomInRange(1, 10);
  const progression = getProgression(progressionLength, startNumber, stepProgression);
  const positionQuestion = getRandomInRange(0, progressionLength - 1);
  const correctAnswer = String(progression[positionQuestion]);
  progression[positionQuestion] = '..';
  const question = progression.join(' ');
  return [question, correctAnswer];
};

export default () => engine(startMessage, generateRound);
