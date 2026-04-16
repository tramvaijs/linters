import { ESLint } from 'eslint';
import path from 'path';
import { fileURLToPath } from 'url';
import importConfig from '../../internal/import.js';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

describe('import / unhappy path', () => {
  const cli = new ESLint({
    cwd: path.join(__dirname, '..'),
    overrideConfigFile: true,
    overrideConfig: [
      ...importConfig,
      {
        languageOptions: {
          sourceType: 'module',
          ecmaVersion: 2015,
        },
      },
    ],
  });

  it('unhappy', async () => {
    const formatter = await cli.loadFormatter('codeframe');
    const results = await cli.lintFiles([
      path.join(__dirname, './__fixtures__/import-unhappy.fixture.js'),
    ]);

    expect(formatter.format(results)).toMatchSnapshot();
  });
});
