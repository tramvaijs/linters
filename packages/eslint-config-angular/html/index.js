const htmlPlugin = require('eslint-plugin-html');

module.exports = [
  {
    files: ['**/*.html'],
    plugins: {
      html: htmlPlugin,
    },
    settings: {
      'html/indent': '+4',
      'html/report-bad-indent': 'error',
    },
  },
];
