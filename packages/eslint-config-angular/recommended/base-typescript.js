import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';

export default [
  {
    files: ['**/*.ts'],
    rules: {
      ...tsPlugin.configs['eslint-recommended'].overrides[0].rules,
    },
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        sourceType: 'module',
        errorOnUnknownASTType: true,
        warnOnUnsupportedTypeScriptVersion: false,
        ecmaVersion: 6,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      'no-useless-constructor': 'off',
      'prefer-destructuring': 'off',
      '@typescript-eslint/no-useless-constructor': ['error'],
      '@typescript-eslint/no-inferrable-types': [
        'error',
        { ignoreParameters: true },
      ],
      '@typescript-eslint/prefer-readonly': ['error'],
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        { accessibility: 'no-public' },
      ],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/array-type': [
        'error',
        { default: 'array-simple', readonly: 'array-simple' },
      ],
    },
  },
];
