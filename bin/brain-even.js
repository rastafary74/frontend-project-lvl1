#!/usr/bin/env node
import greeting from '../src/cli.js';
import brainEvenGame from '../src/brain-even-game.js';

const userName = greeting();
brainEvenGame(userName);
