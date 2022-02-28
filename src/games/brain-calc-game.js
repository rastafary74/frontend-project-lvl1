import getRandomInRange from '../utils.js';
import engine from '../index.js';

const startMessage = 'What is the result of the expression?';
const operatorList = ['+', '-', '*'];

const calculateOperation = (operator, firstNum, secondNum) => {
  switch (operator) {
    case '+':
      return firstNum + secondNum;
    case '*':
      return firstNum * secondNum;
    case '-':
      return firstNum - secondNum;
    default:
      throw new Error('Unsupported operator');
  }
};

const generateRound = () => {
  const num1 = getRandomInRange(1, 10);
  const num2 = getRandomInRange(1, 10);
  const numberOperation = getRandomInRange(0, operatorList.length - 1);
  const question = `${num1} ${operatorList[numberOperation]} ${num2}`;
  const correctAnswer = String(calculateOperation(operatorList[numberOperation], num1, num2));
  return [question, correctAnswer];
};

export default () => engine(startMessage, generateRound);
