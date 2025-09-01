# Lovecraft Test Framework 🐙

A dark and eldritch test framework, powered by the ancient tomes of [TypeScript](https://www.typescriptlang.org/), [Mocha](https://mochajs.org/), [Chai](https://www.chaijs.com/), [Sinon](https://sinonjs.org/), and [c8](https://github.com/bcoe/c8#readme).

## Features 🧠

- Re-exports `expect` from `chai` and `stub` from `sinon`, providing a convenient way to write tests.
- Exposes a CLI command `lovecraft` that can be used to build, test, lint, and publish your TypeScript project.

## Usage 🪄

Import the Lovecraft framework into your project:

```typescript
import lovecraft, { expect, stub } from 'lovecraft';

// Use the imported test utilities in your code
```

The `lovecraft` module provides a default export that can be used to run tests, lint your code, and generate coverage reports. The available command-line options are:

### Build 🛠️
- `lovecraft -b` or `lovecraft --build`: Compiles the TypeScript source code using `tsc`.

### Test 🧪
- `lovecraft` or `lovecraft -t` or `lovecraft --test`: Runs all tests found in `dist/**/*.test.js` files.

### Coverage 📊
- `lovecraft -c` or `lovecraft --coverage`: Runs tests with coverage reporting.

### Lint 🧹
- `lovecraft -l` or `lovecraft --lint`: Runs ESLint on your code.

### Publish 🚀
- `lovecraft -p` or `lovecraft --publish`: Bumps the version, then tags and publishes the package.
- `lovecraft -p minor` or `lovecraft --publish minor`: As above, but increments the minor version.
- `lovecraft -p major` or `lovecraft --publish major`: As above, but increments the major version.

When using the `--publish` option, Lovecraft will run all the other checks (test, lint, coverage) first. The package will only be published if all the checks pass successfully. This can be used to prevent the accidental publication of a package with failing tests or linting issues.

### All 🔮
- `lovecraft -a` or `lovecraft --all`: Runs tests, generates coverage, and lints the code.

Note that "all" means "all checks" in this context; it does not publish the package. However, `lovecraft --all --publish` is a great way to ensure that all checks pass before publishing the package.

## Conventions 🕸️

Lovecraft assumes that your source files are written in TypeScript and your test files follow the convention of being named `*.test.ts`. The CLI commands will compile your code and run the tests against the compiled JavaScript in the `dist` directory.

The Lovecraft framework also includes a default ESLint configuration file (`eslint.config.js`) that can be used to ensure consistent code style and quality.

If you have any other questions or need further assistance, please don't hesitate to reach out to the dark masters of Phantomaton AI. 🐙