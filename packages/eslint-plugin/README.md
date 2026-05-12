### Usage

```js
import tinkoffPlugin from '@tinkoff/eslint-plugin';

export default [
  {
    plugins: {
      '@tinkoff': tinkoffPlugin,
    },
    rules: {
      // configure rules here
    },
  },
];
```

### Rules

| Name                         | Description                                                  | Deprecated |
| ---------------------------- | ------------------------------------------------------------ | ---------- |
| -                            | -                                                            | -          |
| @tinkoff/member-ordering     | Require a consistent member declaration order                | yes        |
| @tinkoff/require-return-type | Require explicit return types on functions and class methods | yes        |
