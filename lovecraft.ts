import child_process from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import options from './options.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BIN = path.join(process.cwd(), 'node_modules', '.bin');
const ESLINT = (configPath: string) => `${path.join(BIN, 'eslint')} -c ${configPath} --ignore-pattern 'coverage/**/*'`;
const MOCHA = (testPattern: string) => `${path.join(BIN, 'mocha')} --ignore 'node_modules/**/*' ${testPattern}`;
const C8 = (testPattern: string) => `${path.join(BIN, 'c8')} -x '*.test.*' -r html --check-coverage --lines 100 ${MOCHA(testPattern)}`;
const BUMPKIN = `${path.join(BIN, 'bumpkin')}`;
const BUMPKINS: Record<string, string> = { major: `${BUMPKIN} major`, minor: `${BUMPKIN} minor` };

const execute = (command: string) => child_process.execSync(command, { stdio: 'inherit' });

type LovecraftOptions = {
  test?: boolean;
  lint?: boolean;
  coverage?: boolean;
  publish?: boolean | string;
  eslintConfig?: string;
  testPattern?: string;
};

const lovecraft = ({
  test,
  lint,
  coverage,
  publish,
  eslintConfig = path.join(__dirname, '..', 'eslint.config.js'),
  testPattern = '**/*.test.ts'
}: LovecraftOptions = options()) => {
  if (test && !coverage) execute(MOCHA(testPattern));
  if (coverage) execute(C8(testPattern));
  if (lint) execute(ESLINT(eslintConfig));
  if (publish) execute(BUMPKINS[publish as string] || BUMPKIN);
};

export default lovecraft;