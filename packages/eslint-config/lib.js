import index from './index.js';

export default [
  ...index,
  {
    rules: {
      'import/no-dynamic-require': 'off',
      'import/no-deprecated': 'off',
      '@typescript-eslint/no-var-requires': 'off',
      '@typescript-eslint/no-empty-function': 'off',
    },
  },
];
