import readlineSync from 'readline-sync';

const getPlayerName = () => readlineSync.question('May I have your name? ');

export const greetPlayer = () => {
  console.log('Welcome to the Brain Games!');
	const name = getPlayerName();
  console.log(`Hello, ${name}!`);
	return name;
};

