import { ESLint } from 'eslint';
import path from 'path';

describe('import / happy path', () => {
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

  it('happy', async () => {
    const codeframe = await cli.loadFormatter('codeframe');
    const results = await cli.lintFiles([
      path.join(__dirname, './__fixtures__/import-happy.fixture.js'),
    ]);

    expect(codeframe.format(results)).toMatchSnapshot();
  });
});
