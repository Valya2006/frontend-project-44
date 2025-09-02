#!/usr/bin/env node
import startGameFlow from '../src/index.js'
import { descriptionGcd, generateRoundGcd } from '../src/games/gcd.js'

startGameFlow(descriptionGcd, generateRoundGcd)
