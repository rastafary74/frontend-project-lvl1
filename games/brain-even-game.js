import readlineSync from 'readline-sync';
import {
  getRandomInRange,
  isEven,
  sendErrorMessage,
  showCongratulations,
  showCorrect,
} from '../src/games-lib.js';

const isCorrectAnswer = (answer, randomInt) => {
  const correctAnswer = ['yes', 'no'];
  if (correctAnswer.includes(answer) === false || answer.length === 0) {
    return false;
  }
  const isEvenNum = isEven(randomInt);

  if (isEvenNum === false && answer === 'yes') {
    return false;
  }

  if (isEvenNum === true && answer === 'no') {
    return false;
  }
  return true;
};

const sendQuestion = () => {
  const randomInt = getRandomInRange(1, 100);
  const answer = readlineSync.question(`Question: ${randomInt}: `);
  console.log(`Your answer: ${answer}`);
  return [answer, randomInt];
};

const brainEvenGame = (userName, countCorrectAnswer = 0) => {
  if (countCorrectAnswer === 0) {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  }
  const [answer, randomInt] = sendQuestion();
  const checkAnswer = isCorrectAnswer(answer, randomInt);
  if (checkAnswer === true) {
    showCorrect();
  } else {
    const correctAnswer = isEven(randomInt) === true ? 'yes' : 'no';
    sendErrorMessage(answer, userName, correctAnswer);
    return false;
  }
  if (countCorrectAnswer === 2) {
    showCongratulations(userName);
    return true;
  }

  brainEvenGame(userName, countCorrectAnswer + 1);
  return true;
};

export default brainEvenGame;
