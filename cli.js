#!/usr/bin/env node

import lovecraft from './lovecraft.js';

const [, , ...args] = process.argv;

try {
  lovecraft(args.includes('-c') || args.includes('--coverage'));  
} catch (e) {
  process.exit(e.code);
}


