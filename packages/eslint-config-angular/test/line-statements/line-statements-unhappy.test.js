import { ESLint } from 'eslint';
import path from 'path';
import { fileURLToPath } from 'url';
import lineStatementsConfig from '../../line-statements/index.js';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

describe('line-statements / unhappy path', () => {
  const cli = new ESLint({
    cwd: path.join(__dirname, '..'),
    overrideConfigFile: true,
    overrideConfig: lineStatementsConfig,
  });

  it('unhappy', async () => {
    const codeframe = await cli.loadFormatter('codeframe');
    const results = await cli.lintFiles([
      path.join(__dirname, './__fixtures__/line-statements-unhappy.fixture.ts'),
    ]);

    expect(codeframe.format(results)).toMatchSnapshot();
  });
});
