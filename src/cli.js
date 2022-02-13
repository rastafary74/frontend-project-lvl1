import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  if (userName.length === 0) {
    greeting();
    return false;
  }
  console.log(`Hello, ${userName}`);
  return userName;
};

export default greeting;
