module.exports = [
  ...require('@tinkoff/eslint-config/lib'),
  ...require('@tinkoff/eslint-config/jest'),
  {
    ignores: [
      // Tests
      '**/__fixtures__/**',
      '**/__snapshots__/**',
      '**/*.fixture.*',
      // IDE
      '.DS_Store',
      '.vscode/**',
      '.idea/**',
      // Dependency directories
      'node_modules/**',
      // Other
      '.tmp/**',
      'debug-path/**',
    ],
  },
];
