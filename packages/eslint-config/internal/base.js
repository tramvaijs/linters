const eslintCommentsPlugin = require('@eslint-community/eslint-plugin-eslint-comments');
const babelParser = require('@babel/eslint-parser');
const { configs } = require('eslint-config-airbnb-extended/legacy');

const errorsConfig = require('../errors/index');

module.exports = [
  ...configs.base.recommended,
  ...errorsConfig,
  {
    plugins: {
      'eslint-comments': eslintCommentsPlugin,
    },
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ecmaFeatures: {
          legacyDecorators: true,
        },
        requireConfigFile: false,
      },
    },
    settings: {
      'import/parser': {
        '@babel/eslint-parser': ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    rules: {
      'eslint-comments/disable-enable-pair': 'error',
      'eslint-comments/no-aggregating-enable': 'error',
      'eslint-comments/no-duplicate-disable': 'error',
      'eslint-comments/no-unlimited-disable': 'error',
      'eslint-comments/no-unused-enable': 'error',

      'no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTernary: true,
        },
      ],
      'no-use-before-define': [
        'error',
        {
          functions: false,
          classes: false,
          variables: true,
        },
      ],
      'func-name-matching': 'off',
      'global-require': 'off',
      'class-methods-use-this': 'off',
      'no-continue': 'off',
      'no-restricted-syntax': 'off',
      'guard-for-in': 'off',
      'default-case': 'off',
      'no-plusplus': 'off',
      'func-names': 'off',
      'consistent-return': 'warn',
      'vars-on-top': 'warn',
      'no-var': 'warn',
      camelcase: [
        'warn',
        {
          allow: ['^UNSAFE_'],
          ignoreDestructuring: false,
          properties: 'never',
        },
      ],
      'func-style': [
        'error',
        'declaration',
        {
          allowArrowFunctions: true,
        },
      ],
      'max-depth': 'off',
      'max-params': 'off',
      'max-classes-per-file': ['error', 4],
      complexity: ['error', 25],
      'max-statements': ['error', 25],
      'no-underscore-dangle': 'off',
      'no-return-assign': ['error', 'except-parens'],
      'lines-between-class-members': [
        'error',
        'always',
        { exceptAfterSingleLine: true },
      ],
      'spaced-comment': ['error', 'always', { exceptions: ['*'] }],
      'max-nested-callbacks': ['error', 4],
      'no-bitwise': 'warn',
      'no-useless-escape': 'warn',
    },
  },
];
