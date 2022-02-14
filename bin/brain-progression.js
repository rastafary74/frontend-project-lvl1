#!/usr/bin/env node
import greeting from '../src/cli.js';
import brainProgressionGame from '../games/brain-progression-game.js';

const userName = greeting();
brainProgressionGame(userName);
