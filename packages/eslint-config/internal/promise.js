const promisePlugin = require('eslint-plugin-promise');

module.exports = [
  promisePlugin.configs['flat/recommended'],
  {
    rules: {
      'promise/always-return': 'off',
      'promise/no-callback-in-promise': 'off',
      'promise/catch-or-return': 'warn',
      'promise/param-names': 'warn',
    },
  },
];
