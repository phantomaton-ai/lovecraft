const all = ['-a', '--all'];
const flags = {
  test: ['-t', '--test', ...all],
  lint: ['-l', '--lint', ...all],
  coverage: ['-c', '--coverage', ...all],
  publish: ['-p', '--publish'],
};

export default (args = []) =>
  args.length === 0 ? { test: true } :
  Object.keys(flags).reduce((options, flag) => ({
    ...options,
    [flag]: flags[flag].some(arg => args.includes(arg))
  }), {});
