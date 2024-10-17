import Mocha from 'mocha';
import chai from 'chai';
import c8 from 'c8';

export { Mocha, chai, c8 };

export const test = () => {
  Mocha.run();
};

export const coverage = () => {
  c8({ reporter: ['lcov', 'text-summary'] }).runTests();
};