module.exports = {
  plugins: ['unicorn'],
  rules: {
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-instanceof-array': 'error',
    'unicorn/no-new-buffer': 'error',
    'unicorn/no-hex-escape': 'error',
    'unicorn/custom-error-definition': 'error',
    'unicorn/prefer-string-starts-ends-with': 'error',
  },
};
