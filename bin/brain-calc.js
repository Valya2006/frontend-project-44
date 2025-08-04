#!/usr/bin/env node
import startGameFlow from '../src/index.js';
import { descriptionCalc, generateRoundCalc } from '../src/games/calc.js';

startGameFlow(descriptionCalc, generateRoundCalc);
