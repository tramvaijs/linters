import { ESLint } from 'eslint';
import path from 'path';

describe('member-ordering / unhappy path', () => {
  const cli = new ESLint({
    cwd: path.join(__dirname, '..'),
    overrideConfigFile: true,
    overrideConfig: require('../../member-ordering'),
  });

  it('unhappy', async () => {
    const codeframe = await cli.loadFormatter('codeframe');
    const results = await cli.lintFiles([
      path.join(__dirname, './__fixtures__/member-ordering-unhappy.fixture.ts'),
    ]);

    expect(codeframe.format(results)).toMatchSnapshot();
  });
});
