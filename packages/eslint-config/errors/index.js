import { rules } from 'eslint-config-airbnb-extended/legacy';
import typescriptParser from '@typescript-eslint/parser';

export default [
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
