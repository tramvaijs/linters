import tsParser from '@typescript-eslint/parser';
import rxjsXPlugin from 'eslint-plugin-rxjs-x';

export default [
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      'rxjs-x': rxjsXPlugin,
    },
    rules: {
      ...rxjsXPlugin.configs['recommended-legacy']?.rules,
      'rxjs-x/no-compat': 'error',
      'rxjs-x/no-connectable': 'error',
      'rxjs-x/no-cyclic-action': 'error',
      'rxjs-x/no-floating-observables': 'error',
      'rxjs-x/no-topromise': 'error',
      'rxjs-x/no-unsafe-catch': 'error',
      'rxjs-x/no-unsafe-first': 'error',
      'rxjs-x/no-unsafe-switchmap': 'error',
      'rxjs-x/throw-error': 'error',
    },
  },
];
