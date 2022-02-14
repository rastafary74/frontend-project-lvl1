#!/usr/bin/env node
import greeting from '../src/cli.js';
import brainPrimeGame from '../games/brain-prime-game.js';

const userName = greeting();
brainPrimeGame(userName);
