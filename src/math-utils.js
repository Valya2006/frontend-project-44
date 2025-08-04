const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomSign = () => {
  const sign = ['-', '+', '*'];
  return sign[getRandomNumber(0, 2)];
};

const calculate = (num1, operator, num2) => {
  switch (operator) {
  case '+': return num1 + num2;
  case '-': return num1 - num2;
  case '*': return num1 * num2;
  }
};

const generateSequence = (start, step, length) => {
  const result = [start];
  while (result.length < length) {
    result.push(start + step);
    start += step;
  }
  return result;
};

const replaceAt = (arr, index) => {
  arr[index] = '..';
  return arr;
};

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i += 1) {
    if (num % i === 0) return false;
  }
    
  return true;
};

export { getRandomNumber, getRandomSign, calculate, generateSequence, replaceAt, isPrime };