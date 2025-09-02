#!/usr/bin/env node
import startGameFlow from '../src/index.js'
import { descriptionEven, generateRoundEven } from '../src/games/even.js'

startGameFlow(descriptionEven, generateRoundEven)
