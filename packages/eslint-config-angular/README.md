# @tinkoff/eslint-config-angular

ESLint config includes Tinkoff rules for Angular applications. Designed to use with `@tinkoff/eslint-config`.

## Requirements

ESLint >= 9 is required.

## Usage

Install from npm

```bash
npm i --save-dev @tinkoff/eslint-config @tinkoff/eslint-config-angular @stylistic/eslint-plugin
```

Create `eslint.config.js` at the project root. Include the recommended configuration sets — choose a base configuration and any necessary additional configs:

```js
import tinkoffConfig from '@tinkoff/eslint-config/app';
import angularConfig from '@tinkoff/eslint-config-angular';

export default [...tinkoffConfig, ...angularConfig];
```

You can also include `optional` configurations. You are responsible for implementing these rules in your project:

```js
import tinkoffConfig from '@tinkoff/eslint-config/app';
import angularConfig from '@tinkoff/eslint-config-angular';

// optional
import rxjsConfig from '@tinkoff/eslint-config-angular/rxjs';
import promiseConfig from '@tinkoff/eslint-config-angular/promise';
import importsConfig from '@tinkoff/eslint-config-angular/imports';
import unicornConfig from '@tinkoff/eslint-config-angular/unicorn';
import htmlEslintConfig from '@tinkoff/eslint-config-angular/html-eslint';
import fileProgressConfig from '@tinkoff/eslint-config-angular/file-progress';
import lineStatementsConfig from '@tinkoff/eslint-config-angular/line-statements';
import memberOrderingConfig from '@tinkoff/eslint-config-angular/member-ordering';
import decoratorPositionConfig from '@tinkoff/eslint-config-angular/decorator-position';
import functionReturnTypeConfig from '@tinkoff/eslint-config-angular/function-return-type';

// experimental strict rules
import experimentalConfig from '@tinkoff/eslint-config-angular/experimental';

export default [
  ...tinkoffConfig,
  ...angularConfig,

  // optional
  ...rxjsConfig,
  ...promiseConfig,
  ...importsConfig,
  ...unicornConfig,
  ...htmlEslintConfig,
  ...fileProgressConfig,
  ...lineStatementsConfig,
  ...memberOrderingConfig,
  ...decoratorPositionConfig,
  ...functionReturnTypeConfig,

  // experimental strict rules
  ...experimentalConfig,
];
```

#### Deprecated

- Do not use `@tinkoff/eslint-config-angular/html` instead of `@tinkoff/eslint-config-angular/html-eslint`. There are some problems with `@tinkoff/eslint-config-angular/html` configuration, because under the hood uses
  `eslint-plugin-html` plugin. When `eslint-plugin-html` is extended, rules from other plugins don't work. [See opened
  issue](https://github.com/BenoitZugmeyer/eslint-plugin-html/issues/176).
