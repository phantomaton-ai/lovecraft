import * as chai from 'chai';
import child_process from 'child_process';
import sinon from 'sinon';

import lovecraft, { expect, stub } from './index.js';

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
  
  it('exports sinon.stub', () => {
    chai.expect(stub).to.equal(sinon.stub);
  });

  describe('lovecraft', () => {
    it('runs tests', () => {
      lovecraft();
      expect(child_process.execSync.calledOnce).to.equal(true);
      expect(child_process.execSync.lastCall.args[0]).to.contain('mocha');
      expect(child_process.execSync.lastCall.args[0]).not.to.contain('c8');
    });
  
    it('runs tests with coverage', () => {
      lovecraft({ coverage: true });
      expect(child_process.execSync.calledOnce).to.equal(true);
      expect(child_process.execSync.lastCall.args[0]).to.contain('mocha');
      expect(child_process.execSync.lastCall.args[0]).to.contain('c8');
    });

    it('runs lint checks', () => {
      lovecraft({ lint: true });
      expect(child_process.execSync.calledOnce).to.equal(true);
      expect(child_process.execSync.lastCall.args[0]).to.contain('eslint');
    });

    it('runs multiple checks', () => {
      lovecraft({ lint: true, test: true });
      expect(child_process.execSync.calledTwice).to.equal(true);
    });
  });
});
