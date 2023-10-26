import { ESLint } from 'eslint';
import path from 'path';

describe('@tinkoff/eslint-config', () => {
  it('app config working', () => {
    const cli = new ESLint({
      useEslintrc: false,
      cwd: path.join(__dirname, '..'),
      baseConfig: {
        extends: ['./app'],
      },
    });

    expect(() => cli.lintText(`const foo = 'bar';`)).not.toThrow();
    expect(() =>
      cli.lintText(`const foo = 'bar';`, { filePath: 'index.ts' })
    ).not.toThrow();
  });

  it('lib config working', () => {
    const cli = new ESLint({
      useEslintrc: false,
      cwd: path.join(__dirname, '..'),
      baseConfig: {
        extends: ['./lib'],
      },
    });

    expect(() => cli.lintText(`const foo = 'bar';`)).not.toThrow();
    expect(() =>
      cli.lintText(`const foo = 'bar';`, { filePath: 'index.ts' })
    ).not.toThrow();
  });

  it('jest config working', () => {
    const cli = new ESLint({
      useEslintrc: false,
      cwd: path.join(__dirname, '..'),
      baseConfig: {
        extends: ['./jest'],
      },
    });

    expect(() => cli.lintText(`const foo = 'bar';`)).not.toThrow();
    expect(() =>
      cli.lintText(`const foo = 'bar';`, { filePath: 'index.ts' })
    ).not.toThrow();
    expect(() =>
      cli.lintText(`const foo = 'bar';`, { filePath: 'index.spec.ts' })
    ).not.toThrow();
  });
});
