import {
  getRandomInRange,
  isEven,
  gameSuccess,
  showAnswer,
  showStartMessage,
  showQuestion,
} from '../src/games-lib.js';

const isCorrectAnswer = (answer, randomInt) => {
  const isEvenNum = isEven(randomInt);
  if (isEvenNum === true && answer === 'yes') {
    return true;
  }
  if (isEvenNum === false && answer === 'no') {
    return true;
  }
  return false;
};

const sendQuestion = () => {
  const randomInt = getRandomInRange(1, 100);
  const answer = showQuestion(randomInt);
  showAnswer(answer);
  return [answer, randomInt];
};

const brainEvenGame = (userName, countCorrectAnswer = 0) => {
  showStartMessage('Answer "yes" if the number is even, otherwise answer "no".', countCorrectAnswer);
  const [answer, randomInt] = sendQuestion();
  const checkAnswer = isCorrectAnswer(answer, randomInt);
  const correctAnswer = isEven(randomInt) === true ? 'yes' : 'no';
  const resultGame = gameSuccess(checkAnswer, answer, userName, correctAnswer, countCorrectAnswer);
  if (resultGame === true) {
    brainEvenGame(userName, countCorrectAnswer + 1);
  }
  return true;
};

export default brainEvenGame;
