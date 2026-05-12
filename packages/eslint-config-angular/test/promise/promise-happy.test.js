import { ESLint } from 'eslint';
import path from 'path';

describe('promise / happy path', () => {
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

  it('happy', async () => {
    const codeframe = await cli.loadFormatter('codeframe');
    const results = await cli.lintFiles([
      path.join(__dirname, './__fixtures__/promise-happy.fixture.ts'),
    ]);

    expect(codeframe.format(results)).toMatchSnapshot();
  });
});
