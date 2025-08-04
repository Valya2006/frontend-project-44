import readlineSync from 'readline-sync';

export default (gameDescription, dataRoundFunc) => {

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n${gameDescription}`);

  let correctAnswersCount = 0; // аккамулятор для подсчета правильных ответов

  for (let i = 0; i < 3; i += 1) {
    const { question, correctAnswer } = dataRoundFunc();
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);

    if (String(userAnswer) === String(correctAnswer)) {
      console.log('Correct!');
      correctAnswersCount += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}!`);
      break;
    }
  }

  if (correctAnswersCount === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};