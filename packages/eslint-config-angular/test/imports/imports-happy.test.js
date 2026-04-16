import { ESLint } from 'eslint';
import path from 'path';
import { fileURLToPath } from 'url';
import importsConfig from '../../imports/index.js';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

describe('imports / happy path', () => {
  const cli = new ESLint({
    cwd: path.join(__dirname, '..'),
    overrideConfigFile: true,
    overrideConfig: importsConfig,
  });

  it('happy', async () => {
    const codeframe = await cli.loadFormatter('codeframe');
    const results = await cli.lintFiles([
      path.join(__dirname, './__fixtures__/imports-happy.fixture.ts'),
    ]);

    expect(codeframe.format(results)).toMatchSnapshot();
  });
});
