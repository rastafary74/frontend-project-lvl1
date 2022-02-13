import readlineSync from 'readline-sync';

const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const isEven = (num) => num % 2 === 0;

const sendErrorMessage = (answer, userName, randomInt) => {
  const correctAnswer = isEven(randomInt) === true ? 'yes' : 'no';
  console.log(`${answer} is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
};

const isCorrectAnswer = (answer, randomInt) => {
  const correctAnswer = ['yes', 'no'];
  if (correctAnswer.includes(answer) === false || answer === undefined) {
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
    console.log('Correct!');
  } else {
    sendErrorMessage(answer, userName, randomInt);
    return false;
  }
  if (countCorrectAnswer === 2) {
    console.log(`Congratulations, ${userName}!`);
    return true;
  }

  brainEvenGame(userName, countCorrectAnswer + 1);
  return true;
};

export default brainEvenGame;
