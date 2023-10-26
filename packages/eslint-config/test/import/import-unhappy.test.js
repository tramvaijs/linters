import { ESLint } from 'eslint';
import path from 'path';

describe('import / unhappy path', () => {
  const cli = new ESLint({
    cwd: path.join(__dirname, '..'),
    useEslintrc: false,
    baseConfig: {
      extends: ['../internal/import'],
      parserOptions: {
        sourceType: 'module',
      },
      env: {
        es6: true,
      },
    },
  });

  it('unhappy', async () => {
    const codeframe = await cli.loadFormatter('codeframe');
    const results = await cli.lintFiles([
      path.join(__dirname, './__fixtures__/import-unhappy.fixture.js'),
    ]);

    expect(codeframe.format(results)).toMatchSnapshot();
  });
});
