import {
  getRandomInRange,
  showAnswer,
  gameSuccess,
  showStartMessage,
  showQuestion,
} from '../src/games-lib.js';

const isCorrectAnswer = (answer, correctAnswer) => correctAnswer === Number(answer);

const sendQuestion = () => {
  const firstNum = getRandomInRange(1, 50);
  const secondNum = getRandomInRange(1, 50);
  const counter = firstNum > secondNum ? firstNum : secondNum;
  let correctAnswer;
  for (let i = counter; i >= 1; i -= 1) {
    if (firstNum % i === 0 && secondNum % i === 0) {
      correctAnswer = i;
      break;
    }
  }
  const answer = showQuestion(`${firstNum} ${secondNum}`);
  showAnswer(answer);
  return [answer, correctAnswer];
};

const brainGCDGame = (userName, countCorrectAnswer = 0) => {
  if (countCorrectAnswer === 0) {
    showStartMessage('Find the greatest common divisor of given numbers.');
  }
  const [answer, correctAnswer] = sendQuestion();
  const checkAnswer = isCorrectAnswer(answer, correctAnswer);
  const resultGame = gameSuccess(checkAnswer, answer, userName, correctAnswer, countCorrectAnswer);
  if (resultGame === 'nextGame') {
    brainGCDGame(userName, countCorrectAnswer + 1);
  }
  return true;
};

export default brainGCDGame;
