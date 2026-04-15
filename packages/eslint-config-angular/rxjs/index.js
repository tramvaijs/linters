module.exports = {
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      plugins: ['rxjs-x'],
      extends: ['plugin:rxjs-x/recommended-legacy'],
      rules: {
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
  ],
};
