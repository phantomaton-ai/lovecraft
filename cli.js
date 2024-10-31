#!/usr/bin/env node

import lovecraft from './lovecraft.js';
import getOptions from './options.js';

const [, , ...args] = process.argv;
const options = getOptions(args);

try {
  lovecraft(options);
} catch (e) {
  process.exit(e.code);
}