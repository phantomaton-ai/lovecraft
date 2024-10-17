import * as chai from 'chai';
import lovecraft, { expect } from './index.js';

describe('index', () => {
  it('exports chai.expect', () => {
    chai.expect(expect).to.equal(chai.expect);
  });
});
