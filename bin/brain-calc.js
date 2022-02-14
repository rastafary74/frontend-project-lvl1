#!/usr/bin/env node
import greeting from '../src/cli.js';
import brainCalcGame from '../games/brain-calc-game.js';

const userName = greeting();
brainCalcGame(userName);
