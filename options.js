export default function getOptions(args) {
  const options = {
    test: args.includes('-t') || args.includes('--test') || args.length < 1,
    lint: args.includes('-l') || args.includes('--lint'),
    coverage: args.includes('-c') || args.includes('--coverage'),
    publish: args.includes('-p') || args.includes('--publish')
  };

  if (args.includes('-a') || args.includes('--all')) {
    options.test = true;
    options.lint = true;
    options.coverage = true;
  }

  return options;
}