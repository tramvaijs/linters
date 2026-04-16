import fileProgressPlugin from 'eslint-plugin-file-progress';

export default [
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
