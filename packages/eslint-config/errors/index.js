const { rules } = require('eslint-config-airbnb-extended/legacy');
const typescriptParser = require('@typescript-eslint/parser');

module.exports = [
  {
    files: ['**/*.js', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: typescriptParser,
    },
    rules: {
      ...rules.base.errors.rules,
      // Overrides
      'no-empty': ['error', { allowEmptyCatch: true }],
      'no-await-in-loop': 'off',
    },
  },
];
