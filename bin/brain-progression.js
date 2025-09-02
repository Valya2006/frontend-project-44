#!/usr/bin/env node
import startGameFlow from '../src/index.js'
import { descriptionProgression, generateRoundProgression } from '../src/games/progression.js'

startGameFlow(descriptionProgression, generateRoundProgression)
