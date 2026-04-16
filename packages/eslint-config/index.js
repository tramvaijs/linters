import globals from 'globals';
import base from './internal/base.js';
import sortClassMembers from './internal/sort-class-members.js';
import importConfig from './internal/import.js';
import promise from './internal/promise.js';
import testFiles from './internal/test-files.js';
import typescript from './internal/typescript.js';
import prettier from './internal/prettier.js';

export default [
  ...base,
  ...sortClassMembers,
  ...importConfig,
  ...promise,
  ...testFiles,
  ...typescript,
  ...prettier,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
];
