import { ESLint } from 'eslint';
import path from 'path';

describe('promise / unhappy', () => {
  const cli = new ESLint({
    cwd: path.join(__dirname, '..'),
    useEslintrc: false,
    baseConfig: {
      extends: ['../promise'],
      parserOptions: {
        project: 'tsconfig.json',
      },
    },
  });

  it('unhappy', async () => {
    const codeframe = await cli.loadFormatter('codeframe');
    const results = await cli.lintFiles([
      path.join(__dirname, './__fixtures__/promise-unhappy.fixture.ts'),
    ]);

    expect(codeframe.format(results)).toMatchSnapshot();
  });
});
