import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      '@typescript-eslint/no-extraneous-class': [
        'error',
        {
          allowConstructorOnly: true,
          allowEmpty: false,
          allowStaticOnly: true,
          allowWithDecorator: true,
        },
      ],
    },
  },
  {
    files: ['**/*.spec.ts', '**/*.fixture.ts'],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      '@typescript-eslint/no-extraneous-class': 'off',
    },
  },
];
