import { ESLint } from 'eslint';
import path from 'path';
import { fileURLToPath } from 'url';
import appConfig from '../app.js';
import libConfig from '../lib.js';
import jestConfig from '../jest.js';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

describe('@tinkoff/eslint-config', () => {
  it('app config working', async () => {
    const cli = new ESLint({
      overrideConfigFile: true,
      overrideConfig: appConfig,
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
      overrideConfig: libConfig,
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
      overrideConfig: jestConfig,
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
