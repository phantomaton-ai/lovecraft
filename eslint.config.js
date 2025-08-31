import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    files: ["**/*.ts"],
    rules: {
      semi: "error"
    }
  }
);
