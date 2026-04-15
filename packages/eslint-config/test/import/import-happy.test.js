import { ESLint } from 'eslint';
import path from 'path';

describe('import / happy path', () => {
  const cli = new ESLint({
    cwd: path.join(__dirname, '..'),
    overrideConfigFile: true,
    overrideConfig: [
      ...require('../../internal/import'),
      {
        languageOptions: {
          sourceType: 'module',
          ecmaVersion: 2015,
        },
      },
    ],
  });

  it('happy', async () => {
    const formatter = await cli.loadFormatter('codeframe');
    const results = await cli.lintFiles([
      path.join(__dirname, './__fixtures__/import-happy.fixture.js'),
    ]);

    expect(formatter.format(results)).toMatchSnapshot();
  });
});
