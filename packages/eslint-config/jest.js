const jestPlugin = require('eslint-plugin-jest');

module.exports = [
  jestPlugin.configs['flat/recommended'],
  {
    rules: {
      'jest/expect-expect': [
        'warn',
        {
          assertFunctionNames: [
            'expect',
            // support superagent library
            'request.**.expect',
          ],
        },
      ],
      'jest/no-disabled-tests': 'off',
    },
  },
];
