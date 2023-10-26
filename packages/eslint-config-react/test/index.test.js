import { ESLint } from 'eslint';
import path from 'path';

describe('@tinkoff/eslint-config-react', () => {
  it('config working', () => {
    const cli = new ESLint({
      useEslintrc: false,
      cwd: path.join(__dirname, '..'),
      baseConfig: {
        extends: ['./index'],
      },
    });

    expect(() => cli.lintText(`const foo = 'bar';`)).not.toThrow();
    expect(() =>
      cli.lintText(`const foo = 'bar';`, { filePath: 'index.ts' })
    ).not.toThrow();
  });
});
