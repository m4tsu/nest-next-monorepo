module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['react-hooks', 'react', 'testing-library'],
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:testing-library/react',
    'plugin:jsx-a11y/recommended',
    'next/core-web-vitals',
  ],
  env: {
    es6: true,
    node: true,
    jest: true,
    browser: true,
    commonjs: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {},
};
