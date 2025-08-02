const getRandomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandomSign = () => {
	const sign = ['-', '+', '*'];
	return sign[getRandomNumber(0, 2)]
}

const calculate = (num1, operator, num2) => {
	switch (operator) {
		case '+': return num1 + num2;
		case '-': return num1 - num2;
		case '*': return num1 * num2;
	}
}


export { getRandomNumber, getRandomSign, calculate }