# Lovecraft Test Framework 🐙

A dark and eldritch test framework, powered by the ancient tomes of Mocha, Chai, and c8.

## Features

- Re-exports all functions and assertions from the `chai` module, allowing you to use them directly in your tests.
- Re-exports all functions from the `sinon` module, providing powerful mocking and stubbing capabilities.
- Exposes a CLI command `lovecraft` that can be used to run your tests, with optional linting and coverage reporting.

## Usage

Import the Lovecraft framework into your project:

```javascript
import lovecraft from 'lovecraft';

const { expect, stub } = lovecraft;

// Use the imported test utilities in your code
```

The `lovecraft` module provides a default export that can be used to run tests, lint your code, and generate coverage reports. The available command-line options are:

- `lovecraft`: Runs all tests found in `**/*.test.js` files.
- `lovecraft -c` or `lovecraft --coverage`: Runs tests with coverage reporting.
- `lovecraft -l` or `lovecraft --lint`: Runs ESLint on your code.
- `lovecraft -a` or `lovecraft --all`: Runs tests, generates coverage, and lints the code.

## Conventions

Lovecraft assumes that your test files follow the convention of being named `*.test.js` and located alongside the code they are testing. This allows the CLI command to easily find and run the appropriate tests.

The Lovecraft framework also includes a default ESLint configuration file (`eslint.config.js`) that can be used to ensure consistent code style and quality.

If you have any other questions or need further assistance, please don't hesitate to reach out to the dark masters of Phantomaton AI. 🐙