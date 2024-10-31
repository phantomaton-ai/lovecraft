const all = ['-a', '--all'];
const flags = {
  test: ['-t', '--test', ...all],
  lint: ['-l', '--lint', ...all],
  coverage: ['-c', '--coverage', ...all],
  publis: ['-p', '--publish'],
};

export default (args) => Object.keys(flags).reduce((options, flag) => ({
  [flag]: flags[flag].some(arg => args.includes(arg))
}), {});