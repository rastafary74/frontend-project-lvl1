import getRandomInRange from '../utils.js';
import engine from '../index.js';

const startMessage = 'What is the result of the expression?';

const calculateOperation = (operator, firstNum, secondNum) => {
  let question = '';
  let correctAnswer;
  switch (operator) {
    case '+':
      correctAnswer = firstNum + secondNum;
      question = `${firstNum} + ${secondNum}`;
      break;
    case '*':
      correctAnswer = firstNum * secondNum;
      question = `${firstNum} * ${secondNum}`;
      break;
    case '-':
      correctAnswer = firstNum - secondNum;
      question = `${firstNum} - ${secondNum}`;
      break;
    default:
  }
  return [question, correctAnswer];
};

const generateRound = () => {
  const num1 = getRandomInRange(1, 10);
  const num2 = getRandomInRange(1, 10);
  const numberOperation = getRandomInRange(0, 2);
  const operatorArr = ['+', '-', '*'];
  const [question, correctAnswer] = calculateOperation(operatorArr[numberOperation], num1, num2);
  return [question, String(correctAnswer)];
};

const brainCalcGame = () => engine(startMessage, generateRound);

export default brainCalcGame;
