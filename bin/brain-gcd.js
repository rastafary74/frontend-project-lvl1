#!/usr/bin/env node
import greeting from '../src/cli.js';
import brainGCDGame from '../games/brain-gcd-game.js';

const userName = greeting();
brainGCDGame(userName);
