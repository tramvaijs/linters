import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import importPlugin from 'eslint-plugin-import';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';

export default [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      import: importPlugin,
      '@typescript-eslint': tsPlugin,
      'simple-import-sort': simpleImportSortPlugin,
    },
    settings: {
      'import/parsers': { '@typescript-eslint/parser': ['.ts'] },
      'import/resolver': {
        'eslint-import-resolver-typescript': true,
        typescript: {
          // always try to resolve types under `root@types` directory
          // even it doesn't contain any source code, like `@types/etc`
          alwaysTryTypes: true,
        },
      },
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/first': 'error',
      'import/exports-last': 'off',
      'import/no-default-export': 'off',
      'import/newline-after-import': ['error', { count: 1 }],
      'import/no-webpack-loader-syntax': 'off',
      /**
       * @note: note you must disable the base rule
       * as it can report incorrect errors in @typescript-eslint
       */
      'import/no-duplicates': 'error',
      'no-duplicate-imports': 'off',

      // overwrite rule from `@tinkoff/eslint-config`
      '@typescript-eslint/consistent-type-imports': 'off',
    },
  },
];
