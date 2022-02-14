import readlineSync from 'readline-sync';
import {
  getRandomInRange,
  getSum,
  getMultiplying,
  getSubtraction,
  showAnswer,
  gameSuccess,
} from '../src/games-lib.js';

const isCorrectAnswer = (answer, correctAnswer) => correctAnswer === Number(answer);

const sendQuestion = () => {
  const firstNum = getRandomInRange(1, 10);
  const secondNum = getRandomInRange(1, 10);
  const numberOperation = getRandomInRange(1, 3);
  let operationText = '';
  let correctAnswer;
  if (numberOperation === 1) {
    correctAnswer = getSum(firstNum, secondNum);
    operationText = `${firstNum} + ${secondNum}`;
  }

  if (numberOperation === 2) {
    correctAnswer = getMultiplying(firstNum, secondNum);
    operationText = `${firstNum} * ${secondNum}`;
  }

  if (numberOperation === 3) {
    correctAnswer = getSubtraction(firstNum, secondNum);
    operationText = `${firstNum} - ${secondNum}`;
  }
  const answer = readlineSync.question(`Question: ${operationText}: `);
  showAnswer(answer);
  return [answer, correctAnswer];
};

const brainCalcGame = (userName, countCorrectAnswer = 0) => {
  if (countCorrectAnswer === 0) {
    console.log('What is the result of the expression?');
  }
  const [answer, correctAnswer] = sendQuestion();
  const checkAnswer = isCorrectAnswer(answer, correctAnswer);
  const resultGame = gameSuccess(checkAnswer, answer, userName, correctAnswer, countCorrectAnswer);
  if (resultGame === 'nextGame') {
    brainCalcGame(userName, countCorrectAnswer + 1);
  }
  return true;
};

export default brainCalcGame;
