import lovecraft from './lovecraft.js';
import * as chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import sinon from 'sinon';

chai.use(chaiAsPromised);

export const expect = chai.expect;
export const stub = sinon.stub;
export default lovecraft;
