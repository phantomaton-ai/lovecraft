# Lovecraft Test Framework 🐙💀

A dark and eldritch test framework, powered by the ancient tomes of [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/), [Sinon](https://sinonjs.org/), and [c8](https://github.com/bcoe/c8#readme).

## Features 🧠

- Re-exports all functions and assertions from the `chai` module, allowing you to use them directly in your tests.
- Re-exports all functions from the `sinon` module, providing powerful mocking and stubbing capabilities.
- Exposes a CLI command `lovecraft` that can be used to run your tests, with optional linting and coverage reporting.

## Usage 🪄

Import the Lovecraft framework into your project:

```javascript
import lovecraft from 'lovecraft';

const { expect, stub } = lovecraft;

// Use the imported test utilities in your code
```

The `lovecraft` module provides a default export that can be used to run tests, lint your code, and generate coverage reports. The available command-line options are:

### Test 🧪
- `lovecraft`: Runs all tests found in `**/*.test.js` files.

### Coverage 📊
- `lovecraft -c` or `lovecraft --coverage`: Runs tests with coverage reporting.

### Lint 🧹
- `lovecraft -l` or `lovecraft --lint`: Runs ESLint on your code.

### All Checks 🔮
- `lovecraft -a` or `lovecraft --all`: Runs tests, generates coverage, and lints the code.

### Publish 🚀
- `lovecraft -p` or `lovecraft --publish`: Runs tests, generates coverage, lints the code, and then publishes the package using `bumpkin.patch()`.

When using the `--publish` option, Lovecraft will run all the other checks (test, lint, coverage) first. The package will only be published if all the checks pass successfully. This ensures that you don't accidentally publish a package with failing tests or linting issues.

## Conventions 🕸️

Lovecraft assumes that your test files follow the convention of being named `*.test.js` and located alongside the code they are testing. This allows the CLI command to easily find and run the appropriate tests.

The Lovecraft framework also includes a default ESLint configuration file (`eslint.config.js`) that can be used to ensure consistent code style and quality.

If you have any other questions or need further assistance, please don't hesitate to reach out to the dark masters of Phantomaton AI. 🐙