import readlineSync from 'readline-sync';
import { getRandomNumber, isEven} from '../math-utils.js';
import { greetPlayer } from '../cli.js';

export const playEvenOddGame = () => {

	const name = greetPlayer(); // запрашиваем и возвращаем имя

	console.log('Answer "yes" if the number is even, otherwise answer "no".')
	let correctAnswersCount = 0; // аккамулятор для подсчета правильных ответов

	for (let i = 0; i < 3; i += 1) {
		const ranNum = getRandomNumber(1, 100); // получаем рандомное число от 1 до 100

		let userAnswer = readlineSync.question(`Question: ${ranNum}\nYour answer: `); // запрашиваем ответ пользователя

		const booleanToAnswer = () => isEven(ranNum) ? 'yes' : 'no'; // правильный ответ

		if (booleanToAnswer() === userAnswer) {
			console.log('Correct!')
			correctAnswersCount += 1;
		} else {
			console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${booleanToAnswer()}".\nLet's try again, ${name}!`);
				break;
		}
	}

	if (correctAnswersCount === 3) {
		console.log(`Congratulations, ${name}`)
	}

};