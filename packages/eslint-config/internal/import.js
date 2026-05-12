import importPlugin from 'eslint-plugin-import';

export default [
  {
    plugins: {
      import: importPlugin,
    },

    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.mjs', '.cjs', '.ts'],
        },
        typescript: {},
        webpack: {},
      },
    },

    rules: {
      'import/no-commonjs': 'off',
      'import/unambiguous': 'off',
      'import/prefer-default-export': 'off', // default imports is evil
      'import/no-deprecated': 'warn',
      'import/default': 'error', // enable default import validation
      'import/extensions': [
        'error',
        'always',
        {
          js: 'never',
          mjs: 'never',
          cjs: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
      'import/order': [
        'warn',
        { groups: [['builtin', 'external', 'internal']] },
      ],
      'import/no-extraneous-dependencies': 'off', // need fine tuning
      'import/no-cycle': 'error',
    },
  },
];
