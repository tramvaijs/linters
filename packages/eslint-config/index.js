const globals = require('globals');

module.exports = [
  ...require('./internal/base'),
  ...require('./internal/sort-class-members'),
  ...require('./internal/import'),
  ...require('./internal/promise'),
  ...require('./internal/test-files'),
  ...require('./internal/typescript'),
  ...require('./internal/prettier'),
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
];
