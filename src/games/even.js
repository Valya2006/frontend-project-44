import { getRandomNumber } from '../math-utils.js'

const descriptionEven = 'Answer "yes" if the number is even, otherwise answer "no".'

const generateRoundEven = () => {
  const question = getRandomNumber(1, 100) // получаем число
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no' // правильный ответ
  return { question, correctAnswer }
}

export { generateRoundEven, descriptionEven }
