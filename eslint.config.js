import { defineConfig, globalIgnores } from 'eslint/config';
import lib from '@tinkoff/eslint-config/lib';
import jest from '@tinkoff/eslint-config/jest';

export default defineConfig([
  globalIgnores([
    // Tests
    '**/__fixtures__/**',
    '**/__snapshots__/**',
    '**/*.fixture.*',
    // IDE
    '.DS_Store',
    '.vscode/**',
    '.idea/**',
    // Dependency directories
    'node_modules/**',
    // Other
    '.tmp/**',
    'debug-path/**',
  ]),
  ...lib,
  ...jest,
  {
    rules: {
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          ts: 'never',
          tsx: 'never',
          jsx: 'never',
        },
      ],
    },
  },
]);
