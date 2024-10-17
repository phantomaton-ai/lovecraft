#!/usr/bin/env node

import { test, coverage } from './index.js';

const [, , ...args] = process.argv;

if (args.includes('-c')) {
  coverage();
} else {
  test();
}