# @tinkoff/eslint-config-react

ESLint config includes rules for React applications. Designed to use with `@tinkoff/eslint-config`.

## Requirements

ESLint >= 9 is required.

## Usage

Install from npm

```bash
npm i --save-dev @tinkoff/eslint-config @tinkoff/eslint-config-react
```

Create `eslint.config.js` at the project root:

```js
import tinkoffConfig from '@tinkoff/eslint-config/app';
import reactConfig from '@tinkoff/eslint-config-react';

export default [...tinkoffConfig, ...reactConfig];
```

## Internal used plugins

- `eslint-plugin-react` — common React lint rules
- `eslint-plugin-react-hooks` — lint rules for React hooks
- `eslint-plugin-jsx-a11y` — accessibility lint rules for JSX
