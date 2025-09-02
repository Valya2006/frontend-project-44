import { getRandomNumber } from '../math-utils.js'

const descriptionGcd = 'Find the greatest common divisor of given numbers.'

const generateRoundGcd = () => {
  let num1 = getRandomNumber(1, 50)
  let num2 = getRandomNumber(2, 50)
  const question = `${num1} ${num2}`
  while (num2 !== 0) {
    [num1, num2] = [num2, num1 % num2]
  }
  const correctAnswer = num1

  return { question, correctAnswer }
}

export { descriptionGcd, generateRoundGcd }
