import { ESLint } from 'eslint';
import path from 'path';

describe('@tinkoff/eslint-config-react', () => {
  it('config working', async () => {
    const cli = new ESLint({
      overrideConfigFile: true,
      overrideConfig: require('../index'),
      cwd: path.join(__dirname, '..'),
    });

    await expect(cli.lintText(`const foo = 'bar';`)).resolves.toBeDefined();
    await expect(
      cli.lintText(`const foo = 'bar';`, { filePath: 'index.ts' })
    ).resolves.toBeDefined();
  });
});
