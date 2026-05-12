import { ESLint } from 'eslint';
import path from 'path';
import { fileURLToPath } from 'url';
import reactConfig from '../index.js';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

describe('@tinkoff/eslint-config-react', () => {
  it('config working', async () => {
    const cli = new ESLint({
      overrideConfigFile: true,
      overrideConfig: reactConfig,
      cwd: path.join(__dirname, '..'),
    });

    await expect(cli.lintText(`const foo = 'bar';`)).resolves.toBeDefined();
    await expect(
      cli.lintText(`const foo = 'bar';`, { filePath: 'index.ts' })
    ).resolves.toBeDefined();
  });
});
