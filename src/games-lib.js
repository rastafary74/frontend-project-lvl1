import readlineSync from 'readline-sync';

export const getRandomInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const isEven = (num) => num % 2 === 0;
export const getSum = (a, b) => a + b;
export const getMultiplying = (a, b) => a * b;
export const getSubtraction = (a, b) => a - b;
export const showQuestion = (question) => readlineSync.question(`Question: ${question}: `);
export const sendErrorMessage = (answer, userName, correctAnswer) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
};
export const showCongratulations = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};
export const showCorrect = () => {
  console.log('Correct!');
};
export const showStartMessage = (message, countCorrectAnswer) => {
  if (countCorrectAnswer === 0) {
    console.log(message);
  }
};
export const showAnswer = (answer) => {
  console.log(`Your answer: ${answer}`);
};
export const gameSuccess = (checkAnswer, answer, userName, correctAnswer, countCorrectAnswer) => {
  if (checkAnswer === false) {
    sendErrorMessage(answer, userName, correctAnswer);
    return false;
  }
  showCorrect();
  if (countCorrectAnswer === 2) {
    showCongratulations(userName);
    return false;
  }
  return true;
};
