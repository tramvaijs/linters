# @tinkoff/prettier-config

Common Prettier configuration. Compatible with another eslint configs.

## Usage

1. Install from npm

```bash
npm i --save-dev @tinkoff/prettier-config
```

1. Create `.prettierrc.js` (or `.prettierrc.mjs` if you use CJS in project) at project root

```js
export { default } from '@tinkoff/prettier-config';
```

More information about available at
[prettier documentation](https://prettier.io/docs/en/configuration.html#sharing-configurations)

### Available presets

- **angular**

```json5
{
  // ...
  prettier: '@tinkoff/prettier-config/angular',
}
```

## Migration guide

### From v3 to v4

1. **Upgrade Prettier**: Update Prettier to version `^3.2.5`. You can do this by running:

```bash
npm install prettier@^3.2.5 -D
```

2. **Update Configuration File**: If you are using CommonJS (`cjs`) in your project, you need to rename your configuration file and update the export syntax.
   - Rename `.prettierrc.js` to `.prettierrc.mjs.`
   - Update the content of `.prettierrc.mjs` to use `export default` instead of `module.exports`. The updated file should look like this:

```js
export { default } from '@tinkoff/eslint-config';
```

```js
import config from '@tinkoff/eslint-config';

export default {
  ...config,
  // your prettier configuration
};
```
