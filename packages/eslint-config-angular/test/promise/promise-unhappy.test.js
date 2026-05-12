import { ESLint } from 'eslint';
import path from 'path';
import { fileURLToPath } from 'url';
import promiseConfig from '../../promise/index.js';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

describe('promise / unhappy', () => {
  const cli = new ESLint({
    cwd: path.join(__dirname, '..'),
    overrideConfigFile: true,
    overrideConfig: [
      ...promiseConfig,
      {
        languageOptions: {
          parserOptions: {
            project: 'tsconfig.json',
          },
        },
      },
    ],
  });

  it('unhappy', async () => {
    const codeframe = await cli.loadFormatter('codeframe');
    const results = await cli.lintFiles([
      path.join(__dirname, './__fixtures__/promise-unhappy.fixture.ts'),
    ]);

    expect(codeframe.format(results)).toMatchSnapshot();
  });
});
