import jestPlugin from 'eslint-plugin-jest';

export default [
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
