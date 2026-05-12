import htmlPlugin from 'eslint-plugin-html';

export default [
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
