import {
  getRandomInRange,
  showAnswer,
  gameSuccess,
  showStartMessage,
  showQuestion,
} from '../src/games-lib.js';

const isPrimeNumber = (number) => {
  const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53];
  if (primeNumbers.includes(number) === true) {
    return true;
  }
  return false;
};

const isCorrectAnswer = (answer, numberToShow) => {
  const isPrime = isPrimeNumber(numberToShow);
  if (isPrime === true && answer === 'yes') {
    return true;
  }
  if (isPrime === false && answer === 'no') {
    return true;
  }
  return false;
};

const sendQuestion = () => {
  const numberToShow = getRandomInRange(2, 60);
  const answer = showQuestion(numberToShow);
  showAnswer(answer);
  return [answer, numberToShow];
};

const brainPrimeGame = (userName, countCorrectAnswer = 0) => {
  showStartMessage('Answer "yes" if given number is prime. Otherwise answer "no".', countCorrectAnswer);
  const [answer, numberToShow] = sendQuestion();
  const checkAnswer = isCorrectAnswer(answer, numberToShow);
  const correctAnswer = checkAnswer ? 'yes' : 'no';
  const resultGame = gameSuccess(checkAnswer, answer, userName, correctAnswer, countCorrectAnswer);
  if (resultGame === 'nextGame') {
    brainPrimeGame(userName, countCorrectAnswer + 1);
  }
  return true;
};

export default brainPrimeGame;
