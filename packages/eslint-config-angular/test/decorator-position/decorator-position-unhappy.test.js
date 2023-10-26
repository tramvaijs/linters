import { ESLint } from 'eslint';
import path from 'path';

describe('decorator-position / unhappy path', () => {
  const cli = new ESLint({
    cwd: path.join(__dirname, '..'),
    useEslintrc: false,
    baseConfig: {
      extends: ['../decorator-position'],
    },
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
