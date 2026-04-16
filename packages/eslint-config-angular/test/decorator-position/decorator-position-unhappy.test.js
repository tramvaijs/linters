import { ESLint } from 'eslint';
import path from 'path';
import { fileURLToPath } from 'url';
import decoratorPositionConfig from '../../decorator-position/index.js';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

describe('decorator-position / unhappy path', () => {
  const cli = new ESLint({
    cwd: path.join(__dirname, '..'),
    overrideConfigFile: true,
    overrideConfig: decoratorPositionConfig,
  });

  it('unhappy', async () => {
    const codeframe = await cli.loadFormatter('codeframe');

    const results = await cli.lintFiles([
      path.join(
        __dirname,
        './__fixtures__/decorator-position-unhappy.fixture.ts'
      ),
    ]);

    expect(codeframe.format(results)).toMatchSnapshot();
  });
});
