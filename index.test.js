import * as chai from 'chai';
import child_process from 'child_process';
import sinon from 'sinon';

import lovecraft, { expect } from './index.js';

describe('index', () => {
  beforeEach(() => {
    sinon.stub(child_process, 'execSync');
  });
  
  afterEach(() => {
    child_process.execSync.restore();
  });
  
  it('exports chai.expect', () => {
    chai.expect(expect).to.equal(chai.expect);
  });

  describe('lovecraft', () => {
    it('runs tests', () => {
      lovecraft();
      expect(child_process.execSync.calledOnce).to.equal(true);
    });
  
    it('runs tests with coverage', () => {
      lovecraft(true);
      expect(child_process.execSync.calledOnce).to.equal(true);
    })    
  });
});
