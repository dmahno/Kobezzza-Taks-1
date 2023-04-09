module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'standard-with-typescript',
  overrides: [
    {
      files: ['./src/**/*.test.ts', './main.ts', './jest.config.ts', './src/**/*.js']
    }
  ],
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    semi: 'off',
    '@typescript-eslint/semi': ['error', 'always'],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/member-delimiter-style': 'error'
  }
};
