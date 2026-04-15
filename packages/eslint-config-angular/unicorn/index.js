const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
// eslint-plugin-unicorn v50+ uses ES modules; handle both CJS and ESM interop
const unicornModule = require('eslint-plugin-unicorn');

const unicornPlugin = unicornModule.default || unicornModule;

module.exports = [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      unicorn: unicornPlugin,
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      'unicorn/prefer-string-slice': 'error',
      'unicorn/no-array-push-push': 'error',
      'unicorn/require-number-to-fixed-digits-argument': 'error',
      'unicorn/no-empty-file': 'error',
      'unicorn/new-for-builtins': 'error',
      'unicorn/no-useless-spread': 'error',
      'unicorn/escape-case': 'error',
      // unicorn/no-unsafe-regex was removed in unicorn v50+; use a dedicated security linter instead
      'unicorn/filename-case': [
        'error',
        {
          case: 'kebabCase',
        },
      ],
    },
  },
];
