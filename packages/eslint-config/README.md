# @tinkoff/eslint-config

ESLint config includes rules for JS and TS codebase. Better to use with framework-oriented packages `@tinkoff/eslint-config-react` or `@tinkoff/eslint-config-angular`.

## Requirements

ESLint >= 9 is required.

## Usage

Install from npm

```bash
npm i --save-dev @tinkoff/eslint-config
```

Create `eslint.config.js` at the project root. Package includes eslint and prettier as dependencies, so you should remove them from your project `package.json`.

### Base configurations

#### For application

```js
import appConfig from '@tinkoff/eslint-config/app';

export default [...appConfig];
```

#### For library

```js
import libConfig from '@tinkoff/eslint-config/lib';

export default [...libConfig];
```

### Additional configurations

#### With Jest

```js
import appConfig from '@tinkoff/eslint-config/app';
import jestConfig from '@tinkoff/eslint-config/jest';

export default [...appConfig, ...jestConfig];
```

## Configurations overview

Main configurations include common rules:

- `@tinkoff/eslint-config/app` — common rules and specific rules for applications
- `@tinkoff/eslint-config/lib` — common rules and specific rules for libraries

Additional configurations. These configs **do not** include common eslint rules and must be included alongside main configurations:

- `@tinkoff/eslint-config/jest` — rules for linting Jest test suites

## Internal used plugins

`@tinkoff/eslint-config/app` and `@tinkoff/eslint-config/lib` include:

- `eslint-config-airbnb-extended` — updated version of common and popular configuration `eslint-config-airbnb`
- `@eslint-community/eslint-plugin-eslint-comments` — validate `eslint` comments
- `eslint-plugin-import` — validate proper imports
- `eslint-plugin-promise` — enforce best practices for promises
- `eslint-plugin-jest` — validate jest tests
- `@typescript-eslint/eslint-plugin` — lint TypeScript files, adopt many eslint rules to TS code, and provide specific TS rules
- `eslint-plugin-prettier` — disable code formatting using eslint tools and transfer all the logic to prettier,
  and report differences as eslint issues

## Troubleshooting

### Wrong or duplicated eslint or some eslint plugins versions

Try to remove `eslint`, `prettier`, and `@tinkoff/eslint-config` internal dependencies from your project `package.json`,
then reinstall dependencies.

## Usage tips for [Nx monorepo](https://nrwl.io/)

### Connect to nx workspace

#### In root config

Create `eslint.config.js` at the workspace root:

```js
import appConfig from '@tinkoff/eslint-config';

export default [
  ...appConfig,
  {
    ignores: ['**/*'],
  },
];
```

#### In apps and non-buildable/non-publishable libs

Create `eslint.config.js` in the project directory:

```js
import rootConfig from '../../eslint.config';
import appConfig from '@tinkoff/eslint-config/app';

export default [
  ...rootConfig,
  ...appConfig,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  },
];
```

#### In buildable/publishable libs

```js
import rootConfig from '../../eslint.config';
import libConfig from '@tinkoff/eslint-config/lib';

export default [
  ...rootConfig,
  ...libConfig,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  },
];
```

### Disable false-positive detections from `import/no-unresolved`

Override the rule in the project's `eslint.config.js`:

```js
import appConfig from '@tinkoff/eslint-config/app';

export default [
  ...appConfig,
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      'import/no-unresolved': [
        'error',
        {
          ignore: ['^@tinkoff/'],
        },
      ],
    },
  },
];
```
