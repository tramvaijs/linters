const tsPlugin = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const decoratorPositionPlugin = require('eslint-plugin-decorator-position');

module.exports = [
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
