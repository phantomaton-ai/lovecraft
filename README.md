# Lovecraft Test Framework 🐙

A dark and eldritch test framework, powered by the ancient tomes of Mocha, Chai, and c8.

## Features

- Re-exports all functions and assertions from the `chai` module, allowing you to use them directly in your tests.
- Re-exports all functions from the `sinon` module, providing powerful mocking and stubbing capabilities.
- Exposes a CLI command `lovecraft` that can be used to run your tests.
  - Running `lovecraft` will execute all tests in the `**/*.test.js` files.
  - Running `lovecraft -c` or `lovecraft --coverage` will generate a code coverage report using `c8`.

## Usage

Import the Lovecraft framework into your project:

```javascript
import lovecraft from 'lovecraft';

const { expect, stub } = lovecraft;

// Use the imported test utilities in your code
```

The `lovecraft` module provides a default export that can be used to run tests. Calling `lovecraft()` will execute all tests found in `**/*.test.js` files, while `lovecraft(true)` or `lovecraft({ coverage: true })` will run the tests with coverage reporting.

## Conventions

Lovecraft assumes that your test files follow the convention of being named `*.test.js` and located alongside the code they are testing. This allows the CLI command to easily find and run the appropriate tests.

If you have any other questions or need further assistance, please don't hesitate to reach out to the dark masters of Phantomaton AI. 🐙