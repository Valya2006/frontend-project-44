#!/usr/bin/env node
import startGameFlow from '../src/index.js'
import { descriptionPrime, generateRoundPrime } from '../src/games/prime.js'

startGameFlow(descriptionPrime, generateRoundPrime)
