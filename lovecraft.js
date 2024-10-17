import { execSync } from 'child_process';

const MOCHA = "mocha --ignore 'node_modules/**/*' **/*.test.js";
const C8 = `c8 -x '*.test.*' -r html --check-coverage --lines 100 ${MOCHA}`;

const lovecraft = (coverage = false) => execSync(coverage ? C8 : MOCHA);

export default lovecraft;
