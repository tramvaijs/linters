const fileProgressPlugin = require('eslint-plugin-file-progress');

module.exports = [
  {
    plugins: {
      'file-progress': fileProgressPlugin,
    },
    settings: {
      progress: {
        hide: false,
        successMessage: 'Lint done...',
      },
    },
    rules: {
      'file-progress/activate': 1,
    },
  },
];
