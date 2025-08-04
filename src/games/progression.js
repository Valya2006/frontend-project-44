import { getRandomNumber, generateSequence, replaceAt } from '../math-utils.js';

const descriptionProgression = 'What number is missing in the progression?';

const generateRoundProgression = () => {
  const start = getRandomNumber(1, 20);
  const step = getRandomNumber(1, 10);
  const length = getRandomNumber(5, 10);
  const index = getRandomNumber(0, length - 1);

  const consistency = generateSequence(start, step, length);
  const correctAnswer = consistency[index];
  const question = `${replaceAt(consistency, index).join(' ')}`;
  return { question, correctAnswer };
};

  

export { descriptionProgression, generateRoundProgression };
