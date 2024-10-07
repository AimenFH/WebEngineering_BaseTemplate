if (typeof structuredClone === 'undefined') {
    global.structuredClone = (obj) => JSON.parse(JSON.stringify(obj));
}

const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const prettierPlugin = require('eslint-plugin-prettier');

module.exports = {
    parser: tsParser,
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        project: './tsconfig.json', // Ensure your tsconfig.json is properly configured.
    },
    plugins: ['@typescript-eslint', 'prettier'],
    extends: [
        'standard-with-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier',
        'eslint:recommended', // Uses the recommended rules from ESLint
    ],
    rules: {
        'prettier/prettier': 'error', // Enforces Prettier rules as ESLint errors
        '@typescript-eslint/no-unused-vars': 'warn', // Warns about unused variables
        'no-console': 'off', // Allows console statements
        'no-unused-vars': 'off',
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.ts'], // Resolve both JS and TS file extensions
            },
        },
    },
    ignorePatterns: [
        'node_modules/',
        'dist/',
        'build/',
        '*.log',
        'coverage/'
    ],
    overrides: [
        {
            files: ['src/**/*.{js,ts}'],
            excludedFiles: '*.test.{js,ts}'
        }
    ]
};