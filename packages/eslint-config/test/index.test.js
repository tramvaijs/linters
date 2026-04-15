import { ESLint } from 'eslint';
import path from 'path';

describe('@tinkoff/eslint-config', () => {
  it('app config working', async () => {
    const cli = new ESLint({
      overrideConfigFile: true,
      overrideConfig: require('../app'),
      cwd: path.join(__dirname, '..'),
    });

    await expect(cli.lintText(`const foo = 'bar';`)).resolves.toBeDefined();
    await expect(
      cli.lintText(`const foo = 'bar';`, { filePath: 'index.ts' })
    ).resolves.toBeDefined();
  });

  it('lib config working', async () => {
    const cli = new ESLint({
      overrideConfigFile: true,
      overrideConfig: require('../lib'),
      cwd: path.join(__dirname, '..'),
    });

    await expect(cli.lintText(`const foo = 'bar';`)).resolves.toBeDefined();
    await expect(
      cli.lintText(`const foo = 'bar';`, { filePath: 'index.ts' })
    ).resolves.toBeDefined();
  });

  it('jest config working', async () => {
    const cli = new ESLint({
      overrideConfigFile: true,
      overrideConfig: require('../jest'),
      cwd: path.join(__dirname, '..'),
    });

    await expect(cli.lintText(`const foo = 'bar';`)).resolves.toBeDefined();
    await expect(
      cli.lintText(`const foo = 'bar';`, { filePath: 'index.ts' })
    ).resolves.toBeDefined();
    await expect(
      cli.lintText(`const foo = 'bar';`, { filePath: 'index.spec.ts' })
    ).resolves.toBeDefined();
  });
});
