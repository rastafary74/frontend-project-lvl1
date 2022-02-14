import {
  getRandomInRange,
  getSum,
  getMultiplying,
  getSubtraction,
  showAnswer,
  gameSuccess,
  showStartMessage,
  showQuestion,
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
  const answer = showQuestion(operationText);
  showAnswer(answer);
  return [answer, correctAnswer];
};

const brainCalcGame = (userName, countCorrectAnswer = 0) => {
  showStartMessage('What is the result of the expression?', countCorrectAnswer);
  const [answer, correctAnswer] = sendQuestion();
  const checkAnswer = isCorrectAnswer(answer, correctAnswer);
  const resultGame = gameSuccess(checkAnswer, answer, userName, correctAnswer, countCorrectAnswer);
  if (resultGame === true) {
    brainCalcGame(userName, countCorrectAnswer + 1);
  }
  return true;
};

export default brainCalcGame;
