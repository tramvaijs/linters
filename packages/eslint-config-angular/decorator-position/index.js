import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import decoratorPositionPlugin from 'eslint-plugin-decorator-position';

export default [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      'decorator-position': decoratorPositionPlugin,
    },
    rules: {
      'decorator-position/decorator-position': [
        'error',
        {
          printWidth: 120,
          properties: 'above',
          methods: 'above',
        },
      ],
    },
  },
];
