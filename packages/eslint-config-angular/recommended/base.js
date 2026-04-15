const tsParser = require('@typescript-eslint/parser');
const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
  // Global ignore patterns
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '**/*@dasherize__/**',
      '**/coverage/**',
      '.eslintrc.js',
      'eslintrc.js',
      '**/*.d.ts',
      '**/dist/**',
      '**/docs/**',
      '.cache/**',
      '.git/**',
      '.idea/**',
    ],
  },
  js.configs.recommended,
  {
    languageOptions: {
      parser: tsParser,
      globals: {
        ...globals.browser,
        ...globals.es2015,
        ...globals.node,
      },
    },
    rules: {
      /**
       * @note: [*.js, *.ts], exclude *.d.ts
       */
      'no-param-reassign': 'off',
      'default-param-last': 'off',
      'prefer-destructuring': 'off',
      'no-case-declarations': 'error',
      'no-console': ['error', { allow: ['info', 'assert', 'warn', 'error'] }],
      'no-implicit-coercion': ['error', { allow: ['!!'] }],
      'no-return-assign': ['error', 'always'],
      'no-useless-rename': [
        'error',
        {
          ignoreDestructuring: true,
          ignoreImport: false,
          ignoreExport: false,
        },
      ],
      eqeqeq: ['error', 'always'],
      'no-useless-concat': 'error',
      'prefer-template': 'error',
      curly: ['error', 'all'],
    },
  },
];
