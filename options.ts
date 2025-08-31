type Flag = 'test' | 'lint' | 'coverage' | 'publish';

const all: string[] = ['-a', '--all'];
const flags: Record<Flag, string[]> = {
  test: ['-t', '--test', ...all],
  lint: ['-l', '--lint', ...all],
  coverage: ['-c', '--coverage', ...all],
  publish: ['-p', '--publish'],
};

const value = (flag: Flag, next: string): boolean | string =>
  (!next || next.startsWith('-')) ? true : next;

const pair = (flag: Flag, args: string[], arg?: string): Record<string, boolean | string> =>
  arg ? { [flag]: value(flag, args[args.indexOf(arg) + 1]) } : {};

const option = (flag: Flag, args: string[]): Record<string, boolean | string> =>
  pair(flag, args, flags[flag].find(arg => args.includes(arg)));

export default (args: string[] = []): Record<string, boolean | string> =>
  args.length === 0 ? { test: true } : (Object.keys(flags) as Flag[]).reduce(
    (options, flag) => ({
      ...options,
      ...option(flag, args)
    }),
    {}
  );
