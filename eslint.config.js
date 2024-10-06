// eslint.config.js
import { ESLint } from 'eslint';

export default [
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
      // Add other rules here
    },
  },
];