import { getRandomNumber, getRandomSign } from '../math-utils.js';

const descriptionCalc = 'What is the result of the expression?';

const generateRoundCalc = () => {
	const num1 = getRandomNumber(1, 50)
	const num2 = getRandomNumber(1, 50);
	const operator = getRandomSign();
	const question = `${num1} ${operator} ${num2}`;
	
	let correctAnswer;
	switch (operator) {
		case '+': correctAnswer = num1 + num2; break;
		case '-': correctAnswer = num1 - num2; break;
		case '*': correctAnswer = num1 * num2; break;
	}

	return { question, correctAnswer };
}

export { descriptionCalc, generateRoundCalc };