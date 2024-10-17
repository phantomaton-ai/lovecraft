#!/usr/bin/env node

import lovecraft from './lovecraft.js';

const [, , ...args] = process.argv;

lovecraft(args.includes('-c') || args.includes('--coverage'));

