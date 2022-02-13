import readlineSync from 'readline-sync';

export const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  if (userName === '') {
    greeting();
    return false;
  }
  console.log(`Hello, ${userName}`);
  return true;
};
