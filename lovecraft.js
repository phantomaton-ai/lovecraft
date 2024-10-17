import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const BIN = path.join(__dirname, 'node_modules', '.bin');
const MOCHA = `${path.join(BIN, 'mocha')} --ignore 'node_modules/**/*' **/*.test.js`;
const C8 = `${path.join(BIN, 'c8')} -x '*.test.*' -r html --check-coverage --lines 100 ${MOCHA}`;

const lovecraft = (coverage = false) => execSync(coverage ? C8 : MOCHA);

export default lovecraft;
