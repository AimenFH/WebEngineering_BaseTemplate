// eslint.config.js
const { ESLint } = require('eslint');

module.exports = [
  {
    files: ['src/**/*.{js,ts}'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-console': 'off',
    },
  },
];