#!/usr/bin/env node

import lovecraft from './lovecraft.js';

const [, , ...args] = process.argv;

const options = args.includes('-a') || args.includes('--all') ?
  { coverage: true, lint: true, test: true } :
  {
    coverage: args.includes('-c') || args.includes('--coverage'),
    lint: args.includes('-l') || args.includes('--lint'),
    test: args.includes('-t') || args.includes('--test') || args.length < 1
  };

try {
  lovecraft(options);
} catch (e) {
  process.exit(e.code);
}
