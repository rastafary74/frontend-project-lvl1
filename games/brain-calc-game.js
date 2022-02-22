import getRandomInRange from '../src/games-lib.js';
import engine from '../src/index.js';

const generateRound = () => {
  const firstNum = getRandomInRange(1, 10);
  const secondNum = getRandomInRange(1, 10);
  const numberOperation = getRandomInRange(1, 3);
  let question = '';
  let correctAnswer;
  if (numberOperation === 1) {
    correctAnswer = firstNum + secondNum;
    question = `${firstNum} + ${secondNum}`;
  }

  if (numberOperation === 2) {
    correctAnswer = firstNum * secondNum;
    question = `${firstNum} * ${secondNum}`;
  }

  if (numberOperation === 3) {
    correctAnswer = firstNum - secondNum;
    question = `${firstNum} - ${secondNum}`;
  }
  return [question, String(correctAnswer)];
};

const brainCalcGame = (userName) => {
  const startMessage = 'What is the result of the expression?';
  return engine(startMessage, userName, generateRound);
};

export default brainCalcGame;
