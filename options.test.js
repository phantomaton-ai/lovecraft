import { expect } from 'chai';
import options from './options.js';

describe('options', () => {
  it('sets the test option when no arguments are provided', () => {
    expect(options()).to.deep.equal({ test: true });
  });

  it('sets the test option when -t or --test is provided', () => {
    expect(options(['-t']).test).to.be.true;
    expect(options(['--test']).test).to.be.true;
  });

  it('sets the lint option when -l or --lint is provided', () => {
    expect(options(['-l']).lint).to.be.true;
    expect(options(['--lint']).lint).to.be.true;
  });

  it('sets the coverage option when -c or --coverage is provided', () => {
    expect(options(['-c']).coverage).to.be.true;
    expect(options(['--coverage']).coverage).to.be.true;
  });

  it('sets the publish option when -p or --publish is provided', () => {
    expect(options(['-p']).publish).to.be.true;
    expect(options(['--publish']).publish).to.be.true;
  });

  it('enables all checks when -a or --all is provided', () => {
    expect(options(['-a'])).to.deep.equal(
      { test: true, lint: true, coverage: true, publish: false }
    );
    expect(options(['--all'])).to.deep.equal(
      { test: true, lint: true, coverage: true, publish: false }
    );
  });
});