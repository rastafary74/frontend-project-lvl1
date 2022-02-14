import readlineSync from 'readline-sync';
import {
  getRandomInRange,
  showAnswer,
  gameSuccess,
} from '../src/games-lib.js';

const isCorrectAnswer = (answer, correctAnswer) => correctAnswer === Number(answer);

const sendQuestion = () => {
  const progressionLength = getRandomInRange(5, 10);
  const starNumber = getRandomInRange(1, 30);
  const stepProgression = getRandomInRange(1, 10);
  const progressionArr = [starNumber];
  for (let i = 0; i <= progressionLength; i += 1) {
    const symbolOnPush = progressionArr[i] + stepProgression;
    progressionArr.push(symbolOnPush);
  }
  const positionQuestion = getRandomInRange(0, progressionLength);
  const correctAnswer = progressionArr[positionQuestion];
  progressionArr[positionQuestion] = '..';
  const progressionString = progressionArr.join(' ');
  const answer = readlineSync.question(`Question: ${progressionString}: `);
  showAnswer(answer);
  return [answer, correctAnswer];
};

const brainProgressionGame = (userName, countCorrectAnswer = 0) => {
  if (countCorrectAnswer === 0) {
    console.log('What number is missing in the progression?');
  }
  const [answer, correctAnswer] = sendQuestion();
  const checkAnswer = isCorrectAnswer(answer, correctAnswer);
  const resultGame = gameSuccess(checkAnswer, answer, userName, correctAnswer, countCorrectAnswer);
  if (resultGame === 'nextGame') {
    brainProgressionGame(userName, countCorrectAnswer + 1);
  }
  return true;
};

export default brainProgressionGame;
