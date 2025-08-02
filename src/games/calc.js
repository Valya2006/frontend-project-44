import { getRandomNumber, getRandomSign } from '../math-utils.js';

const descriptionCalc = 'What is the result of the expression?';

const generateRoundCalc = () => {
	const num1 = getRandomNumber(1, 50)
	const num2 = getRandomNumber(1, 50);
	const operator = getRandomSign();
	const question = `${num1} ${operator} ${num2}`;
	
	const correctAnswer = operator === '-' ? num1 - num2 :
												operator === '+' ? num1 + num2 :
												num1 * num2;

	return { question, correctAnswer };
}

export { descriptionCalc, generateRoundCalc };