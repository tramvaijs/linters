import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import unicornPlugin from 'eslint-plugin-unicorn';

export default [
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
