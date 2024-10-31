import { expect } from 'chai';
import options from './options.js';

describe('options', () => {
  it('sets the test option when no arguments are provided', () => {
    const expected = { test: true };
    expect(options()).to.deep.equal(expected);
  });

  it('sets the test option when -t or --test is provided', () => {
    const expected = { test: true };
    expect(options(['-t'])).to.deep.equal(expected);
    expect(options(['--test'])).to.deep.equal(expected);
  });

  it('sets the lint option when -l or --lint is provided', () => {
    const expected = { lint: true };
    expect(options(['-l'])).to.deep.equal(expected);
    expect(options(['--lint'])).to.deep.equal(expected);
  });

  it('sets the coverage option when -c or --coverage is provided', () => {
    const expected = { coverage: true };
    expect(options(['-c'])).to.deep.equal(expected);
    expect(options(['--coverage'])).to.deep.equal(expected);
  });

  it('sets the publish option when -p or --publish is provided', () => {
    const expected = { publish: true };
    expect(options(['-p'])).to.deep.equal(expected);
    expect(options(['--publish'])).to.deep.equal(expected);
  });

  it('enables all checks when -a or --all is provided', () => {
    const expected = { test: true, lint: true, coverage: true, publish: false };
    expect(options(['-a'])).to.deep.equal(expected);
    expect(options(['--all'])).to.deep.equal(expected);
  });

  it('sets multiple options when multiple flags are provided', () => {
    const expected = { test: true, lint: true, coverage: true, publish: true };
    expect(options(['-t', '-l', '-c', '-p'])).to.deep.equal(expected);
  });

  it('sets the correct default values when no arguments are provided', () => {
    const expected = { test: true, lint: false, coverage: false, publish: false };
    expect(options()).to.deep.equal(expected);
  });
});