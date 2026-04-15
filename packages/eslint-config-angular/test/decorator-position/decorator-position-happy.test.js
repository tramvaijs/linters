import { ESLint } from 'eslint';
import path from 'path';

describe('decorator-position / happy path', () => {
  const cli = new ESLint({
    cwd: path.join(__dirname, '..'),
    overrideConfigFile: true,
    overrideConfig: require('../../decorator-position'),
  });

  it('happy', async () => {
    const codeframe = await cli.loadFormatter('codeframe');

    const results = await cli.lintFiles([
      path.join(
        __dirname,
        './__fixtures__/decorator-position-happy.fixture.ts'
      ),
    ]);

    expect(codeframe.format(results)).toMatchSnapshot();
  });
});
