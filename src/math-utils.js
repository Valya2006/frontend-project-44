const getRandomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

const getRandomSign = () => {
	const sign = ['-', '+', '*'];
	return sign[getRandomNumber(0, 2)]
}


export { getRandomNumber, getRandomSign}