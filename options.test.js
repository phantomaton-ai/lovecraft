import { expect } from 'chai';
import getOptions from './options.js';

describe('getOptions', () => {
  it('returns { test: true } when no arguments are provided', () => {
    const options = getOptions();
    expect(options).to.deep.equal({ test: true });
  });

  it('sets the test option when -t or --test is provided', () => {
    const options = getOptions(['-t']);
    expect(options.test).to.be.true;

    const options2 = getOptions(['--test']);
    expect(options2.test).to.be.true;
  });

  it('sets the lint option when -l or --lint is provided', () => {
    const options = getOptions(['-l']);
    expect(options.lint).to.be.true;

    const options2 = getOptions(['--lint']);
    expect(options2.lint).to.be.true;
  });

  it('sets the coverage option when -c or --coverage is provided', () => {
    const options = getOptions(['-c']);
    expect(options.coverage).to.be.true;

    const options2 = getOptions(['--coverage']);
    expect(options2.coverage).to.be.true;
  });

  it('sets the publish option when -p or --publish is provided', () => {
    const options = getOptions(['-p']);
    expect(options.publish).to.be.true;

    const options2 = getOptions(['--publish']);
    expect(options2.publish).to.be.true;
  });

  it('sets all options when -a or --all is provided', () => {
    const options = getOptions(['-a']);
    expect(options).to.deep.equal({ test: true, lint: true, coverage: true, publish: true });

    const options2 = getOptions(['--all']);
    expect(options2).to.deep.equal({ test: true, lint: true, coverage: true, publish: true });
  });
});