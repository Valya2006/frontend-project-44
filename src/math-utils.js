const getRandomNumber = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

const isEven = (number) => {
	return number % 2 === 0 ? true : false;
};

export { getRandomNumber, isEven}